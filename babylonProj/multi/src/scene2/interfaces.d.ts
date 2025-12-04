import {
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    PointLight,
    DirectionalLight,
    SpotLight,
    MeshBuilder,
    Mesh,
    Light,
    Camera,
    Engine,
    StandardMaterial,
    Color3,
    ShadowGenerator,
    Texture,
} from "@babylonjs/core";

export interface SceneData {
    scene: Scene;
    box?: Mesh;
    light?: Light;
    hemi?: HemisphericLight;
    point?: PointLight;
    direct?: DirectionalLight;
    spot?: SpotLight;
    sphere?: Mesh;
    cylinder?: Mesh;
    cone?: Mesh;
    triangle?: Mesh;
    capsule?: Mesh;
    ground?: Mesh;
    camera?: Camera;
}