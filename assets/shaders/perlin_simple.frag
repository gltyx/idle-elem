{
  "sksl": {
    "entrypoint": "perlin_simple_fragment_main",
    "shader": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform float u_time;\nuniform float u_spaceScale;\nuniform float u_timeScale;\nuniform float u_gradient;\nuniform float u_amtScale;\nuniform float colorCount;\nuniform float brightness;\nuniform float amt0;\nuniform float amt1;\nuniform float amt2;\nuniform float amt3;\nuniform float amt4;\nuniform float amt5;\nuniform vec3 col0;\nuniform vec3 col1;\nuniform vec3 col2;\nuniform vec3 col3;\nuniform vec3 col4;\nuniform vec3 col5;\n\nvec4 fragColor;\n\nvec2 FLT_flutter_local_FlutterFragCoord()\n{\n    return flutter_FragCoord.xy;\n}\n\nvec4 FLT_flutter_local_mod289(vec4 x)\n{\n    return x - (floor(x * 0.00346020772121846675872802734375) * 289.0);\n}\n\nvec4 FLT_flutter_local_permute(vec4 x)\n{\n    vec4 param = ((x * 34.0) + vec4(10.0)) * x;\n    return FLT_flutter_local_mod289(param);\n}\n\nvec4 FLT_flutter_local_taylorInvSqrt(vec4 r)\n{\n    return vec4(1.792842864990234375) - (r * 0.8537347316741943359375);\n}\n\nvec4 FLT_flutter_local_fade(vec4 t)\n{\n    return ((t * t) * t) * ((t * ((t * 6.0) - vec4(15.0))) + vec4(10.0));\n}\n\nfloat FLT_flutter_local_cnoise(vec4 P)\n{\n    vec4 Pi0 = floor(P);\n    vec4 Pi1 = Pi0 + vec4(1.0);\n    vec4 param = Pi0;\n    Pi0 = FLT_flutter_local_mod289(param);\n    vec4 param_1 = Pi1;\n    Pi1 = FLT_flutter_local_mod289(param_1);\n    vec4 Pf0 = fract(P);\n    vec4 Pf1 = Pf0 - vec4(1.0);\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = vec4(Pi0.zzzz);\n    vec4 iz1 = vec4(Pi1.zzzz);\n    vec4 iw0 = vec4(Pi0.wwww);\n    vec4 iw1 = vec4(Pi1.wwww);\n    vec4 param_2 = ix;\n    vec4 param_3 = FLT_flutter_local_permute(param_2) + iy;\n    vec4 ixy = FLT_flutter_local_permute(param_3);\n    vec4 param_4 = ixy + iz0;\n    vec4 ixy0 = FLT_flutter_local_permute(param_4);\n    vec4 param_5 = ixy + iz1;\n    vec4 ixy1 = FLT_flutter_local_permute(param_5);\n    vec4 param_6 = ixy0 + iw0;\n    vec4 ixy00 = FLT_flutter_local_permute(param_6);\n    vec4 param_7 = ixy0 + iw1;\n    vec4 ixy01 = FLT_flutter_local_permute(param_7);\n    vec4 param_8 = ixy1 + iw0;\n    vec4 ixy10 = FLT_flutter_local_permute(param_8);\n    vec4 param_9 = ixy1 + iw1;\n    vec4 ixy11 = FLT_flutter_local_permute(param_9);\n    vec4 gx00 = ixy00 * 0.14285714924335479736328125;\n    vec4 gy00 = floor(gx00) * 0.14285714924335479736328125;\n    vec4 gz00 = floor(gy00) * 0.16666667163372039794921875;\n    gx00 = fract(gx00) - vec4(0.5);\n    gy00 = fract(gy00) - vec4(0.5);\n    gz00 = fract(gz00) - vec4(0.5);\n    vec4 gw00 = ((vec4(0.75) - abs(gx00)) - abs(gy00)) - abs(gz00);\n    vec4 sw00 = step(gw00, vec4(0.0));\n    gx00 -= (sw00 * (step(vec4(0.0), gx00) - vec4(0.5)));\n    gy00 -= (sw00 * (step(vec4(0.0), gy00) - vec4(0.5)));\n    vec4 gx01 = ixy01 * 0.14285714924335479736328125;\n    vec4 gy01 = floor(gx01) * 0.14285714924335479736328125;\n    vec4 gz01 = floor(gy01) * 0.16666667163372039794921875;\n    gx01 = fract(gx01) - vec4(0.5);\n    gy01 = fract(gy01) - vec4(0.5);\n    gz01 = fract(gz01) - vec4(0.5);\n    vec4 gw01 = ((vec4(0.75) - abs(gx01)) - abs(gy01)) - abs(gz01);\n    vec4 sw01 = step(gw01, vec4(0.0));\n    gx01 -= (sw01 * (step(vec4(0.0), gx01) - vec4(0.5)));\n    gy01 -= (sw01 * (step(vec4(0.0), gy01) - vec4(0.5)));\n    vec4 gx10 = ixy10 * 0.14285714924335479736328125;\n    vec4 gy10 = floor(gx10) * 0.14285714924335479736328125;\n    vec4 gz10 = floor(gy10) * 0.16666667163372039794921875;\n    gx10 = fract(gx10) - vec4(0.5);\n    gy10 = fract(gy10) - vec4(0.5);\n    gz10 = fract(gz10) - vec4(0.5);\n    vec4 gw10 = ((vec4(0.75) - abs(gx10)) - abs(gy10)) - abs(gz10);\n    vec4 sw10 = step(gw10, vec4(0.0));\n    gx10 -= (sw10 * (step(vec4(0.0), gx10) - vec4(0.5)));\n    gy10 -= (sw10 * (step(vec4(0.0), gy10) - vec4(0.5)));\n    vec4 gx11 = ixy11 * 0.14285714924335479736328125;\n    vec4 gy11 = floor(gx11) * 0.14285714924335479736328125;\n    vec4 gz11 = floor(gy11) * 0.16666667163372039794921875;\n    gx11 = fract(gx11) - vec4(0.5);\n    gy11 = fract(gy11) - vec4(0.5);\n    gz11 = fract(gz11) - vec4(0.5);\n    vec4 gw11 = ((vec4(0.75) - abs(gx11)) - abs(gy11)) - abs(gz11);\n    vec4 sw11 = step(gw11, vec4(0.0));\n    gx11 -= (sw11 * (step(vec4(0.0), gx11) - vec4(0.5)));\n    gy11 -= (sw11 * (step(vec4(0.0), gy11) - vec4(0.5)));\n    vec4 g0000 = vec4(gx00.x, gy00.x, gz00.x, gw00.x);\n    vec4 g1000 = vec4(gx00.y, gy00.y, gz00.y, gw00.y);\n    vec4 g0100 = vec4(gx00.z, gy00.z, gz00.z, gw00.z);\n    vec4 g1100 = vec4(gx00.w, gy00.w, gz00.w, gw00.w);\n    vec4 g0010 = vec4(gx10.x, gy10.x, gz10.x, gw10.x);\n    vec4 g1010 = vec4(gx10.y, gy10.y, gz10.y, gw10.y);\n    vec4 g0110 = vec4(gx10.z, gy10.z, gz10.z, gw10.z);\n    vec4 g1110 = vec4(gx10.w, gy10.w, gz10.w, gw10.w);\n    vec4 g0001 = vec4(gx01.x, gy01.x, gz01.x, gw01.x);\n    vec4 g1001 = vec4(gx01.y, gy01.y, gz01.y, gw01.y);\n    vec4 g0101 = vec4(gx01.z, gy01.z, gz01.z, gw01.z);\n    vec4 g1101 = vec4(gx01.w, gy01.w, gz01.w, gw01.w);\n    vec4 g0011 = vec4(gx11.x, gy11.x, gz11.x, gw11.x);\n    vec4 g1011 = vec4(gx11.y, gy11.y, gz11.y, gw11.y);\n    vec4 g0111 = vec4(gx11.z, gy11.z, gz11.z, gw11.z);\n    vec4 g1111 = vec4(gx11.w, gy11.w, gz11.w, gw11.w);\n    vec4 param_10 = vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100));\n    vec4 norm00 = FLT_flutter_local_taylorInvSqrt(param_10);\n    g0000 *= norm00.x;\n    g0100 *= norm00.y;\n    g1000 *= norm00.z;\n    g1100 *= norm00.w;\n    vec4 param_11 = vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101));\n    vec4 norm01 = FLT_flutter_local_taylorInvSqrt(param_11);\n    g0001 *= norm01.x;\n    g0101 *= norm01.y;\n    g1001 *= norm01.z;\n    g1101 *= norm01.w;\n    vec4 param_12 = vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110));\n    vec4 norm10 = FLT_flutter_local_taylorInvSqrt(param_12);\n    g0010 *= norm10.x;\n    g0110 *= norm10.y;\n    g1010 *= norm10.z;\n    g1110 *= norm10.w;\n    vec4 param_13 = vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111));\n    vec4 norm11 = FLT_flutter_local_taylorInvSqrt(param_13);\n    g0011 *= norm11.x;\n    g0111 *= norm11.y;\n    g1011 *= norm11.z;\n    g1111 *= norm11.w;\n    float n0000 = dot(g0000, Pf0);\n    float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));\n    float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));\n    float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));\n    float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));\n    float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));\n    float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));\n    float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));\n    float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));\n    float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));\n    float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));\n    float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));\n    float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));\n    float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));\n    float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));\n    float n1111 = dot(g1111, Pf1);\n    vec4 param_14 = Pf0;\n    vec4 fade_xyzw = FLT_flutter_local_fade(param_14);\n    vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), vec4(fade_xyzw.w));\n    vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), vec4(fade_xyzw.w));\n    vec4 n_zw = mix(n_0w, n_1w, vec4(fade_xyzw.z));\n    vec2 n_yzw = mix(n_zw.xy, n_zw.zw, vec2(fade_xyzw.y));\n    float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);\n    return 2.2000000476837158203125 * n_xyzw;\n}\n\nfloat FLT_flutter_local_getAmt(float i)\n{\n    if (i <= 0.0)\n    {\n        return amt0;\n    }\n    if (i <= 1.0)\n    {\n        return amt1;\n    }\n    if (i <= 2.0)\n    {\n        return amt2;\n    }\n    if (i <= 3.0)\n    {\n        return amt3;\n    }\n    if (i <= 4.0)\n    {\n        return amt4;\n    }\n    if (i <= 5.0)\n    {\n        return amt5;\n    }\n    return amt0;\n}\n\nvec3 FLT_flutter_local_getCol(float i)\n{\n    if (i <= 0.0)\n    {\n        return col0;\n    }\n    if (i <= 1.0)\n    {\n        return col1;\n    }\n    if (i <= 2.0)\n    {\n        return col2;\n    }\n    if (i <= 3.0)\n    {\n        return col3;\n    }\n    if (i <= 4.0)\n    {\n        return col4;\n    }\n    if (i <= 5.0)\n    {\n        return col5;\n    }\n    return col0;\n}\n\nvoid FLT_main()\n{\n    vec2 pos = (FLT_flutter_local_FlutterFragCoord() * u_spaceScale) / vec2(colorCount);\n    float time = (u_time * u_timeScale) / 12.0;\n    float gradient = u_gradient / colorCount;\n    float maxNoise = (-1.0) - gradient;\n    vec3 col = vec3(0.0);\n    for (float i_1 = 0.0; i_1 < 6.0; i_1 += 1.0)\n    {\n        if (i_1 < colorCount)\n        {\n            vec4 param = vec4(pos.x, pos.y, 12.0 * sin(time), (12.0 * cos(time)) + (i_1 * 32.0));\n            float n = FLT_flutter_local_cnoise(param);\n            float param_1 = i_1;\n            n += (FLT_flutter_local_getAmt(param_1) * u_amtScale);\n            float lo = maxNoise - (gradient / 2.0);\n            float hi = maxNoise + (gradient / 2.0);\n            if (n > lo)\n            {\n                float param_2 = i_1;\n                col = mix(col, FLT_flutter_local_getCol(param_2), vec3(smoothstep(lo, hi, n)));\n                maxNoise = max(maxNoise, n);\n            }\n        }\n    }\n    col = mix(col, vec3(0.0), vec3(1.0 - brightness));\n    fragColor = vec4(col, 1.0);\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
    "stage": 1,
    "uniforms": [
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 0,
        "name": "u_time",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 1,
        "name": "u_spaceScale",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 2,
        "name": "u_timeScale",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 3,
        "name": "u_gradient",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 4,
        "name": "u_amtScale",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 5,
        "name": "colorCount",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 6,
        "name": "brightness",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 7,
        "name": "amt0",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 8,
        "name": "amt1",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 9,
        "name": "amt2",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 10,
        "name": "amt3",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 11,
        "name": "amt4",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 12,
        "name": "amt5",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 13,
        "name": "col0",
        "rows": 3,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 14,
        "name": "col1",
        "rows": 3,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 15,
        "name": "col2",
        "rows": 3,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 16,
        "name": "col3",
        "rows": 3,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 17,
        "name": "col4",
        "rows": 3,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 18,
        "name": "col5",
        "rows": 3,
        "type": 10
      }
    ]
  }
}