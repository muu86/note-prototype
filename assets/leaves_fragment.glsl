varying vec2 v_uv;

uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_texture;
uniform sampler2D u_mask_texture;

const int SIZE = 21;
const float SCALE = 1.;

float leaves(vec2 uv) {
    return step(texture(u_texture, uv).x, .4);
}

vec2 anim(int phase) {
    return (sin(vec2(.7, .6) * u_time / 4.0 + vec2(phase, phase + 2) * 6.283 * .618)) * .01;
}

vec3 render(vec2 uv) {
    vec3 col = vec3(6, 5, 4);

    uv *= .5;

    for(int i = 0; i < 5; i++) {
        col = mix(col, 3.0 * pow(vec3(.73, .87, .2), 4. * vec3(i + 1)), leaves(uv + anim(i) * (length(uv) * .5 + .3)));
        uv = uv * sqrt(3. / 4.) + uv.yx * vec2(-1, 1) * sqrt(1. / 4.) + vec2(.618, 1. - .618);
    }

    return col;
}

void main() {
    vec2 fragCoord = v_uv * u_resolution;

    vec4 fragColor = vec4(0.0, 0.0, 0.0, 1.0);
    float n = 0.0;

    for(int i = 0; i <= SIZE; i++) {
        for(int j = 0; j <= SIZE; j++) {
            vec2 uvo = vec2(float(i), float(j)) - float(SIZE) / 2.0;
            if(length(uvo) > float(SIZE) * 0.5 + 0.5)
                continue;

            fragColor.rgb += render((fragCoord + uvo * SCALE) / u_resolution.y);
            n++;
        }
    }

    fragColor.rgb /= n;
    fragColor.rgb = pow(fragColor.rgb, vec3(1.0 / 2.2));

    gl_FragColor = vec4(fragColor);

    // float mask = texture(u_mask_texture, vUv).r;
    // float visibility = 1.0 - smoothstep(0.0, 0.1, mask);

    // vec3 finalColor = mix(vec3(1.0), fragColor.rgb, visibility);

    // gl_FragColor = vec4(finalColor, 1.0);
}
