import * as THREE from "three";

export function assignUVsAndGenerateTemplate(
  mesh: THREE.Mesh,
  setUvMapDataURL: (url: string) => void,
  scale = 50
) {
    mesh.geometry.computeBoundingBox();
    const box = mesh.geometry.boundingBox;

    if (!box) {
        throw new Error("Bounding box could not be computed");
    }

    const L = box.max.x - box.min.x; // length (X)
    const H = box.max.y - box.min.y; // height (Y)
    const W = box.max.z - box.min.z; // width (Z)

    const texW = 2 * (L + W);
    const texH = 2 * W + H;

    const pos = mesh.geometry.attributes.position;
    const uv = new Float32Array(pos.count * 2);

    type ViewName = "top" | "bottom" | "front" | "back" | "left" | "right";

    const regions = {
        top:    { x: W,       y: 0,     w: L, h: W },
        left:   { x: 0,       y: W,     w: W, h: H },
        front:  { x: W,       y: W,     w: L, h: H },
        right:  { x: W + L,   y: W,     w: W, h: H },
        back:   { x: W + L + W, y: W,   w: L, h: H },
        bottom: { x: W,       y: W + H, w: L, h: W }
    };

    const mappers: Record<ViewName, (v: THREE.Vector3) => THREE.Vector2> = {
        top:    (v: THREE.Vector3) => new THREE.Vector2(regions.top.x + (v.x - box.min.x), regions.top.y + (W - (v.z - box.min.z))),
        bottom: (v: THREE.Vector3) => new THREE.Vector2(regions.bottom.x + (v.x - box.min.x), regions.bottom.y + (v.z - box.min.z)),
        front:  (v: THREE.Vector3) => new THREE.Vector2(regions.front.x + (v.x - box.min.x), regions.front.y + (H - (v.y - box.min.y))),
        back:   (v: THREE.Vector3) => new THREE.Vector2(regions.back.x + (L - (v.x - box.min.x)), regions.back.y + (H - (v.y - box.min.y))),
        left:   (v: THREE.Vector3) => new THREE.Vector2(regions.left.x + (v.z - box.min.z), regions.left.y + (H - (v.y - box.min.y))),
        right:  (v: THREE.Vector3) => new THREE.Vector2(regions.right.x + (W - (v.z - box.min.z)), regions.right.y + (H - (v.y - box.min.y)))
    };

    const referencePoints: Record<ViewName, (v: THREE.Vector3) => THREE.Vector3> = {
        top:    (v: THREE.Vector3) => new THREE.Vector3(v.x, box.max.y + 1, v.z),
        bottom: (v: THREE.Vector3) => new THREE.Vector3(v.x, box.min.y - 1, v.z),
        front:  (v: THREE.Vector3) => new THREE.Vector3(v.x, v.y, box.min.z - 1),
        back:   (v: THREE.Vector3) => new THREE.Vector3(v.x, v.y, box.max.z + 1),
        left:   (v: THREE.Vector3) => new THREE.Vector3(box.min.x - 1, v.y, v.z),
        right:  (v: THREE.Vector3) => new THREE.Vector3(box.max.x + 1, v.y, v.z)
    };

    const raycaster = new THREE.Raycaster();

    for (let i = 0; i < pos.count; i += 3) {
        const v0 = new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i));
        const v1 = new THREE.Vector3(pos.getX(i + 1), pos.getY(i + 1), pos.getZ(i + 1));
        const v2 = new THREE.Vector3(pos.getX(i + 2), pos.getY(i + 2), pos.getZ(i + 2));

        const normal = new THREE.Vector3().crossVectors(
            new THREE.Vector3().subVectors(v1, v0),
            new THREE.Vector3().subVectors(v2, v0)
        ).normalize();

        let mapper: (v: THREE.Vector3) => THREE.Vector2;
        let view: ViewName;
        if (Math.abs(normal.y) > Math.abs(normal.x) && Math.abs(normal.y) > Math.abs(normal.z)) {
            mapper = normal.y > 0 ? mappers.top : mappers.bottom;
            view = normal.y > 0 ? "top" : "bottom";
        } else if (Math.abs(normal.z) > Math.abs(normal.x)) {
            mapper = normal.z > 0 ? mappers.back : mappers.front;
            view = normal.z > 0 ? "back" : "front";
        } else {
            mapper = normal.x > 0 ? mappers.right : mappers.left;
            view = normal.x > 0 ? "right" : "left";
        }

        // Raycast for each vertex to detect exterior
        const vertices = [v0, v1, v2];
        let isExterior = false;
        for (let v of vertices) {
            const refPoint = referencePoints[view](v);
            const dir = new THREE.Vector3().subVectors(v, refPoint).normalize();
            raycaster.set(refPoint, dir);
            const intersects = raycaster.intersectObject(mesh, true);
            if (intersects.length &&
                Math.abs(intersects[0].point.distanceTo(refPoint) - v.distanceTo(refPoint)) < 0.001) {
                isExterior = true;
                break;
            }
        }

        if (!isExterior) {
            uv.set([0, 0, 0, 0, 0, 0], i * 2);
            continue;
        }

        vertices.forEach((v, j) => {
            const uvCoords = mapper(v);
            const idx = i + j;
            uv[idx * 2] = uvCoords.x / texW;
            uv[idx * 2 + 1] = 1 - uvCoords.y / texH;
        });
    }

    mesh.geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));

    const canvas = document.createElement("canvas");
    canvas.width = texW * scale;
    canvas.height = texH * scale;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        throw new Error("Failed to get 2D context");
    }

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#00AAFF";
    ctx.lineWidth = 1;

    for (let i = 0; i < pos.count; i += 3) {
        const uv0 = new THREE.Vector2(uv[i * 2] * texW, uv[i * 2 + 1] * texH);
        const uv1 = new THREE.Vector2(uv[(i + 1) * 2] * texW, uv[(i + 1) * 2 + 1] * texH);
        const uv2 = new THREE.Vector2(uv[(i + 2) * 2] * texW, uv[(i + 2) * 2 + 1] * texH);

        if (uv0.equals(new THREE.Vector2(0, 0)) &&
            uv1.equals(new THREE.Vector2(0, 0)) &&
            uv2.equals(new THREE.Vector2(0, 0))) continue;

        ctx.beginPath();
        ctx.moveTo(uv0.x * scale, uv0.y * scale);
        ctx.lineTo(uv1.x * scale, uv1.y * scale);
        ctx.lineTo(uv2.x * scale, uv2.y * scale);
        ctx.closePath();
        ctx.stroke();
    }

    setUvMapDataURL(canvas.toDataURL("image/png"));
  // your full assignUVsAndGenerateTemplate code here,
  // with `setUvMapDataURL(canvas.toDataURL("image/png"));` instead of global uvMapDataURL
}
