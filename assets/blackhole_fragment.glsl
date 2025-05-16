precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_uv;

// HSV → RGB 변환 함수
vec3 hsv2rgb(vec3 c) {
     vec4 K = vec4(1., 2. / 3., 1. / 3., 3.);
     vec3 p = abs(fract(c.xxx + K.xyz) * 6. - K.www);
     return c.z * mix(K.xxx, clamp(p - K.xxx, 0., 1.), c.y);
}

// 해시 함수로 좌표 기반 랜덤값 생성
float hash(vec2 p) {
     return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
     vec2 F = v_uv * u_resolution;

    // Iterator and attenuation (distance-squared)
     float i = 0.2, a;

    // Resolution for scaling and centering
     vec2 r = u_resolution.xy,
         // Centered ratio-corrected coordinates
     p = (F + F - r) / r.y * 0.3,
    // p = (F + F - r) / 0.2,
         // Diagonal vector for skewing
     d = vec2(-1.0, 1.0),
         // Blackhole center
     b = p - i * d,
         // Rotate and apply perspective
     c = p * mat2(1.0, 1.0, d / (0.1 + i / dot(b, b))),
         // Rotate into spiraling coordinates
     v = c * mat2(cos(0.5 * log(a = dot(c, c)) + u_time * i + vec4(0, 33, 11, 0))) / i,
         // Waves cumulative total for coloring
     w;

    // Loop through waves
     for(; i++ < 9.0; w += 1.0 + sin(v)) {
        // Distort coordinates
          v += 1.7 * sin(v.yx * i + u_time) / 22.0 / i + 0.5;
     }

    // Accretion disk radius
     float disk = length(sin(v / 0.3) * 0.4 + c * (3.0 + d));

    // Red/blue gradient
     vec4 O = 1.0 - exp(-exp(c.x * vec4(0.6, -0.4, -1.0, 0.0)) / w.xyyx / (2.0 + disk * disk / 4.0 - disk) / (0.5 + 1.0 / a) / (0.03 + abs(length(p) - 0.7)));
    // vec4 O = 1.0 - exp(-exp(c.x * vec4(11.5, -11.0, -12.0, 0.0)) / w.xyyx / (2.0 + i * i / 4.0 - i) / (0.5 + 1.0 / a) / (0.03 + abs(length(p) - 0.7)));

     gl_FragColor = O;
}