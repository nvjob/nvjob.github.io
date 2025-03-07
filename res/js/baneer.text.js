/*!
 * #NVJOB Promo Banner
 * (c) 2016 - 2019 #NVJOB Nicholas Veselov https://nvjob.github.io
 * Attribution-NonCommercial-NoDerivs 2.0 Generic (CC BY-NC-ND 2.0)
 * https://creativecommons.org/licenses/by-nc-nd/2.0/
 */

var typed5 = new Typed('#typed', {
strings: [
'Shader "#NVJOB" {', 
'Properties{', 
'_TextureUv1("Uv Scale", Float) = 1',
'_IntensityT1("Intensity", Range(-10, 10)) = 1.5',
'_TextureV1("Motion Vector", Vector) = (0.9, 1, 0, 0)',
'[NoScaleOffset]_Texture1("Main Texture", 2D) = "white" {}',
'SubShader{',
'Tags{ "Queue" = "Geometry+500" "RenderType" = "Transparent" }',
'Blend SrcAlpha OneMinusSrcAlpha',
'LOD 200',
'CGPROGRAM',
'#pragma surface surf Nolight alpha:fade vertex:vert exclude_path:prepass nofog',
'half4 LightingNolight(SurfaceOutput s, half3 nullA, half nullB) {',
'half4 c;',
'c.rgb = s.Albedo;',
'c.a = s.Alpha;',
'return c; }',
'sampler2D _Texture1;',
'half4 _Color;',
'half4 _TextureV1;',
'half _IntensityT1, _IntensityInput, _Fluffiness;',
'half _TextureUv1;',
'half _SkyShaderUvX, _SkyShaderUvZ;',
'struct Input {',
'float2 posTex; };',
'void vert(inout appdata_full v, out Input o) {',
'UNITY_INITIALIZE_OUTPUT(Input, o);',
'o.posTex = float4(v.texcoord * 1.0 - 1.0, 0.0, 1.0); }',
'void surf(Input IN, inout SurfaceOutput o) {',
'half4 tex = _Color;',
'half2 uv = IN.posTex;',
'uv.xy += half2(_SkyShaderUvX * _TextureV1.x, _SkyShaderUvZ * _TextureV1.y);',
'tex *= tex2D(_Texture1, uv * _TextureUv1) * _IntensityT1;',
'tex *= _IntensityInput;',
'half4 outTex = normalize((tex - 0.5) * _Fluffiness + 0.5);',
'outTex *= _IntensityOutput;',
'o.Albedo = outTex;',
'o.Alpha = tex.a; }',
'ENDCG }',
'Fallback "Legacy Shaders/Transparent/VertexLit" }'
],
typeSpeed: 80,
backSpeed: 40,
shuffle: false,
smartBackspace: true,
loop: true
});