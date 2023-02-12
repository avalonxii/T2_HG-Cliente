import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1600 900"
    preserveAspectRatio="xMidYMax slice"
    {...props}
  >
    <defs>
      <linearGradient id="a">
        <stop
          offset="0%"
          style={{
            stopColor: "rgba(255,255,255,.06)",
          }}
        />
        <stop
          offset="50%"
          style={{
            stopColor: "rgba(255,255,255,.6)",
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "rgba(255,255,255,.2)",
          }}
        />
      </linearGradient>
      <path
        id="b"
        fill="url(#a)"
        d="M-363.852 502.589s236.988-41.997 505.475 0 371.981 38.998 575.971 0 293.985-39.278 505.474 5.859 493.475 48.368 716.963-4.995v560.106H-363.852v-560.97z"
      />
    </defs>
    <use xlinkHref="#b" opacity={0.3}>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="10s"
        calcMode="spline"
        values="270 230; -334 180; 270 230"
        keyTimes="0; .5; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite"
      />
    </use>
    <use xlinkHref="#b" opacity={0.6}>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="8s"
        calcMode="spline"
        values="-270 230;243 220;-270 230"
        keyTimes="0; .6; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite"
      />
    </use>
    <use xlinkHref="#b">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="6s"
        calcMode="spline"
        values="0 230;-140 200;0 230"
        keyTimes="0; .4; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite"
      />
    </use>
  </svg>
)

export default SvgComponent