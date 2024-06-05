{
  "sksl": {
    "entrypoint": "perlin_fragment_main",
    "shader": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform float u_time;\nuniform float u_spaceScale;\nuniform float u_pulseScale;\nuniform float u_gradient;\nuniform float u_amtScale;\nuniform float colorCount;\nuniform float brightness;\nuniform float waviness;\nuniform float imgCount;\nuniform float imgScale;\nuniform float u_imgMoveSpeed;\nuniform float amt0;\nuniform float amt1;\nuniform float amt2;\nuniform float amt3;\nuniform float amt4;\nuniform float amt5;\nuniform vec3 col0;\nuniform vec3 col1;\nuniform vec3 col2;\nuniform vec3 col3;\nuniform vec3 col4;\nuniform vec3 col5;\nuniform shader noiseImg;\nuniform half2 noiseImg_size;\nuniform shader imgEmpty;\nuniform half2 imgEmpty_size;\nuniform shader img0;\nuniform half2 img0_size;\nuniform shader img1;\nuniform half2 img1_size;\nuniform shader img2;\nuniform half2 img2_size;\nuniform shader img3;\nuniform half2 img3_size;\nuniform shader img4;\nuniform half2 img4_size;\nuniform shader img5;\nuniform half2 img5_size;\n\nvec4 fragColor;\n\nvec2 FLT_flutter_local_FlutterFragCoord()\n{\n    return flutter_FragCoord.xy;\n}\n\nvec4 FLT_flutter_local_noiseBase(inout vec3 p, float o)\n{\n    p = vec3(p.xy / vec2(12.0), p.z) + vec3(o * 1.4500000476837158203125, o * 1.66999995708465576171875, o * 2.230000019073486328125);\n    float iz = floor(p.z);\n    float fz = fract(p.z);\n    vec2 a_off = (vec2(123.0, 229.0) * mod(iz, 8192.0)) / vec2(512.0);\n    vec2 b_off = (vec2(123.0, 229.0) * mod(iz + 1.0, 8192.0)) / vec2(512.0);\n    vec4 a = noiseImg.eval(noiseImg_size * ( fract(p.xy + a_off)));\n    vec4 b = noiseImg.eval(noiseImg_size * ( fract(p.xy + b_off)));\n    return mix(a, b, vec4(fz));\n}\n\nvec4 FLT_flutter_local_perlin(vec3 p, float o)\n{\n    vec4 ret = vec4(0.0);\n    for (float i = 0.0; i < 2.0; i += 1.0)\n    {\n        vec3 param = p * pow(2.0, i);\n        float param_1 = o;\n        vec4 _140 = FLT_flutter_local_noiseBase(param, param_1);\n        ret += (_140 * pow(0.5, i));\n    }\n    return ret;\n}\n\nfloat FLT_flutter_local_getAmt(float i)\n{\n    if (i <= 0.0)\n    {\n        return amt0;\n    }\n    if (i <= 1.0)\n    {\n        return amt1;\n    }\n    if (i <= 2.0)\n    {\n        return amt2;\n    }\n    if (i <= 3.0)\n    {\n        return amt3;\n    }\n    if (i <= 4.0)\n    {\n        return amt4;\n    }\n    if (i <= 5.0)\n    {\n        return amt5;\n    }\n    return 0.0;\n}\n\nvec3 FLT_flutter_local_getCol(float i, inout vec2 pos)\n{\n    if (i < imgCount)\n    {\n        pos = fract(pos);\n        if (i <= 0.0)\n        {\n            return img0.eval(img0_size * ( pos)).xyz;\n        }\n        else\n        {\n            if (i <= 1.0)\n            {\n                return img1.eval(img1_size * ( pos)).xyz;\n            }\n            else\n            {\n                if (i <= 2.0)\n                {\n                    return img2.eval(img2_size * ( pos)).xyz;\n                }\n                else\n                {\n                    if (i <= 3.0)\n                    {\n                        return img3.eval(img3_size * ( pos)).xyz;\n                    }\n                    else\n                    {\n                        if (i <= 4.0)\n                        {\n                            return img4.eval(img4_size * ( pos)).xyz;\n                        }\n                        else\n                        {\n                            if (i <= 5.0)\n                            {\n                                return img5.eval(img5_size * ( pos)).xyz;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n    else\n    {\n        bool _231 = imgCount >= 1.0;\n        bool _238;\n        if (_231)\n        {\n            _238 = (i - 1.0) < imgCount;\n        }\n        else\n        {\n            _238 = _231;\n        }\n        if (_238)\n        {\n            pos = vec2(mod(pos.x, 2.0), mod(pos.y, 2.0)) / vec2(2.0);\n            return imgEmpty.eval(imgEmpty_size * ( pos)).xyz;\n        }\n        else\n        {\n            bool _260 = imgCount >= 0.0;\n            bool _267;\n            if (_260)\n            {\n                _267 = (i - 1.0) < imgCount;\n            }\n            else\n            {\n                _267 = _260;\n            }\n            if (_267)\n            {\n                pos = vec2(mod(pos.x, 2.0), mod(pos.y, 2.0)) / vec2(2.0);\n                return imgEmpty.eval(imgEmpty_size * ( pos)).xyz;\n            }\n        }\n    }\n    if (i <= 0.0)\n    {\n        return col0;\n    }\n    if (i <= 1.0)\n    {\n        return col1;\n    }\n    if (i <= 2.0)\n    {\n        return col2;\n    }\n    if (i <= 3.0)\n    {\n        return col3;\n    }\n    if (i <= 4.0)\n    {\n        return col4;\n    }\n    if (i <= 5.0)\n    {\n        return col5;\n    }\n    return col0;\n}\n\nvoid FLT_main()\n{\n    vec2 pos_1 = (FLT_flutter_local_FlutterFragCoord() * u_spaceScale) / vec2(colorCount);\n    vec2 imgPos = FLT_flutter_local_FlutterFragCoord() * imgScale;\n    vec3 noisePos = vec3(pos_1, u_time * u_pulseScale);\n    float gradient = u_gradient / colorCount;\n    float loMax = (-1.0) - gradient;\n    float hiMax = -1.0;\n    vec3 col = vec3(0.0);\n    for (int s = 0; s < 2; s++)\n    {\n        if (float((s - 1) * 3) >= colorCount)\n        {\n            break;\n        }\n        vec3 param = noisePos;\n        float param_1 = float(s) * 32.0;\n        vec4 noise = FLT_flutter_local_perlin(param, param_1);\n        for (int j = 0; j < 3; j++)\n        {\n            int i_1 = (s * 3) + j;\n            if (float(i_1) >= colorCount)\n            {\n                break;\n            }\n            float n = noise.x;\n            if (j == 1)\n            {\n                n = noise.y;\n            }\n            else\n            {\n                if (j == 2)\n                {\n                    n = noise.z;\n                }\n            }\n            float param_2 = float(i_1);\n            n += (FLT_flutter_local_getAmt(param_2) * u_amtScale);\n            if (n > loMax)\n            {\n                float iOffs = ((float(i_1) * 2.0) * 3.141499996185302734375) / colorCount;\n                float n2 = (waviness * sin((u_time * u_imgMoveSpeed) + iOffs)) * 12.0;\n                float n3 = (waviness * cos((u_time * u_imgMoveSpeed) + iOffs)) * 12.0;\n                float param_3 = float(i_1);\n                vec2 param_4 = vec2(imgPos.x + n2, imgPos.y + n3);\n                vec3 _536 = FLT_flutter_local_getCol(param_3, param_4);\n                col = mix(col, _536, vec3(smoothstep(loMax, hiMax, n)));\n                loMax = max(loMax, n - (gradient * 0.5));\n                hiMax = max(hiMax, n + (gradient * 0.5));\n            }\n        }\n    }\n    col = mix(col, vec3(0.0), vec3(1.0 - brightness));\n    fragColor = vec4(col, 1.0);\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
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
        "name": "u_pulseScale",
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
        "name": "waviness",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 8,
        "name": "imgCount",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 9,
        "name": "imgScale",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 10,
        "name": "u_imgMoveSpeed",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 11,
        "name": "amt0",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 12,
        "name": "amt1",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 13,
        "name": "amt2",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 14,
        "name": "amt3",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 15,
        "name": "amt4",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 16,
        "name": "amt5",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 17,
        "name": "col0",
        "rows": 3,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 18,
        "name": "col1",
        "rows": 3,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 19,
        "name": "col2",
        "rows": 3,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 20,
        "name": "col3",
        "rows": 3,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 21,
        "name": "col4",
        "rows": 3,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 22,
        "name": "col5",
        "rows": 3,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 0,
        "columns": 1,
        "location": 23,
        "name": "noiseImg",
        "rows": 1,
        "type": 12
      },
      {
        "array_elements": 0,
        "bit_width": 0,
        "columns": 1,
        "location": 24,
        "name": "imgEmpty",
        "rows": 1,
        "type": 12
      },
      {
        "array_elements": 0,
        "bit_width": 0,
        "columns": 1,
        "location": 25,
        "name": "img0",
        "rows": 1,
        "type": 12
      },
      {
        "array_elements": 0,
        "bit_width": 0,
        "columns": 1,
        "location": 26,
        "name": "img1",
        "rows": 1,
        "type": 12
      },
      {
        "array_elements": 0,
        "bit_width": 0,
        "columns": 1,
        "location": 27,
        "name": "img2",
        "rows": 1,
        "type": 12
      },
      {
        "array_elements": 0,
        "bit_width": 0,
        "columns": 1,
        "location": 28,
        "name": "img3",
        "rows": 1,
        "type": 12
      },
      {
        "array_elements": 0,
        "bit_width": 0,
        "columns": 1,
        "location": 29,
        "name": "img4",
        "rows": 1,
        "type": 12
      },
      {
        "array_elements": 0,
        "bit_width": 0,
        "columns": 1,
        "location": 30,
        "name": "img5",
        "rows": 1,
        "type": 12
      }
    ]
  }
}