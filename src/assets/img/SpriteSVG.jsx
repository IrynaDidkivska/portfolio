import PropTypes from "prop-types";
export const SpriteSVG = ({ name }) => {
  switch (name) {
    case "css":
      return (
        <svg id="icon-css" viewBox="0 0 32 32">
          <path
            fill="#1572b6"
            d="M5.902 27.108l-2.246-24.991h24.688l-2.249 24.987-10.11 2.779-10.083-2.775z"
          ></path>
          <path
            fill="#33a9dc"
            d="M16 27.759l8.17-2.246 1.922-21.353h-10.092v23.599z"
          ></path>
          <path
            fill="#fff"
            d="M16 13.214h4.090l0.282-3.139h-4.372v-3.065h7.75l-0.074 0.822-0.759 8.447h-6.917v-3.065z"
          ></path>
          <path
            fill="#ebebeb"
            d="M16.019 21.174l-0.014 0.004-3.442-0.922-0.22-2.445h-3.103l0.433 4.813 6.331 1.743 0.015-0.004v-3.189z"
          ></path>
          <path
            fill="#fff"
            d="M19.827 16.15l-0.372 4.104-3.447 0.922v3.189l6.336-1.741 0.047-0.518 0.537-5.957h-3.101z"
          ></path>
          <path
            fill="#ebebeb"
            d="M16.011 7.011v3.065h-7.466l-0.062-0.689-0.141-1.554-0.074-0.822h7.743zM16 13.214v3.065h-3.399l-0.062-0.689-0.14-1.554-0.074-0.822h3.675z"
          ></path>
        </svg>
      );
    case "html":
      return (
        <svg id="icon-html" viewBox="0 0 32 32">
          <path
            fill="#e44f26"
            d="M5.902 27.201l-2.247-25.201h24.69l-2.25 25.197-10.11 2.803-10.083-2.799z"
          ></path>
          <path
            fill="#f1662a"
            d="M16 27.858l8.17-2.265 1.922-21.532h-10.092v23.797z"
          ></path>
          <path
            fill="#ebebeb"
            d="M16 13.407h-4.090l-0.282-3.165h4.372v-3.091h-7.75l0.074 0.83 0.759 8.517h6.917v-3.091zM16 21.434l-0.014 0.004-3.442-0.929-0.22-2.465h-3.103l0.433 4.852 6.332 1.758 0.014-0.004v-3.216z"
          ></path>
          <path
            fill="#fff"
            d="M15.989 13.407v3.091h3.806l-0.357 4.009-3.448 0.93v3.216l6.337-1.757 0.046-0.522 0.726-8.137 0.076-0.83h-7.185zM15.989 7.151v3.091h7.466l0.062-0.694 0.141-1.567 0.074-0.83h-7.743z"
          ></path>
        </svg>
      );
    case "js":
      return (
        <svg id="icon-js" viewBox="0 0 32 32">
          <path fill="#f5de19" d="M2 2h28v28h-28v-28z"></path>
          <path
            fill="#000"
            d="M20.809 23.875c0.478 0.956 1.45 1.6 2.571 1.6 0.010 0 0.020-0 0.030-0h-0.002c1.090 0 1.787-0.545 1.787-1.3 0-0.9-0.716-1.222-1.916-1.747l-0.658-0.282c-1.9-0.809-3.16-1.822-3.16-3.964 0-1.973 1.5-3.476 3.853-3.476 0.084-0.006 0.181-0.010 0.28-0.010 1.501 0 2.803 0.85 3.452 2.096l0.010 0.022-2.057 1.315c-0.27-0.667-0.912-1.128-1.663-1.128-0.009 0-0.019 0-0.028 0l0.001-0c-0.034-0.004-0.074-0.006-0.114-0.006-0.628 0-1.139 0.506-1.145 1.133v0.001c0 0.789 0.489 1.109 1.618 1.6l0.658 0.282c2.236 0.959 3.5 1.936 3.5 4.133 0 2.369-1.861 3.667-4.36 3.667-0.096 0.006-0.208 0.010-0.321 0.010-1.931 0-3.609-1.083-4.46-2.674l-0.013-0.027 2.136-1.244zM11.514 24.103c0.413 0.733 0.789 1.353 1.693 1.353 0.864 0 1.41-0.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964-0.067 0.004-0.144 0.006-0.223 0.006-1.648 0-3.068-0.976-3.714-2.381l-0.010-0.025 2.142-1.299z"
          ></path>
        </svg>
      );
    case "react":
      return (
        <svg id="icon-react" viewBox="0 0 32 32">
          <path
            fill="#00d8ff"
            d="M26.31 10.96c-0.189-0.073-0.532-0.185-0.878-0.287l-0.151-0.038c0.058-0.238 0.112-0.474 0.159-0.705 0.78-3.799 0.27-6.859-1.471-7.867-1.669-0.966-4.399 0.042-7.156 2.45-0.272 0.238-0.538 0.483-0.797 0.734-0.164-0.157-0.336-0.318-0.512-0.475l-0.019-0.016c-2.889-2.575-5.786-3.66-7.525-2.65-1.668 0.969-2.162 3.846-1.46 7.446 0.070 0.357 0.149 0.711 0.236 1.064-0.549 0.153-0.943 0.281-1.332 0.42l0.148-0.046c-3.388 1.185-5.551 3.043-5.551 4.97 0 1.991 2.322 3.987 5.851 5.197 0.286 0.098 0.575 0.188 0.865 0.272-0.066 0.236-0.153 0.623-0.229 1.013l-0.022 0.133c-0.669 3.538-0.147 6.346 1.516 7.309 1.718 0.994 4.601-0.027 7.409-2.491 0.242-0.213 0.459-0.415 0.672-0.622l-0.004 0.004c0.281 0.272 0.569 0.536 0.865 0.792 2.719 2.348 5.405 3.297 7.067 2.331 1.716-0.997 2.274-4.014 1.55-7.686-0.080-0.409-0.146-0.699-0.219-0.985l0.027 0.127c0.336-0.096 0.535-0.16 0.731-0.227l-0.136 0.040c3.668-1.22 6.055-3.192 6.055-5.208 0-1.934-2.233-3.804-5.689-4.998zM25.514 19.865c-0.175 0.058-0.355 0.114-0.538 0.169-0.405-1.287-0.951-2.655-1.62-4.069 0.638-1.38 1.164-2.73 1.557-4.009 0.327 0.095 0.645 0.195 0.951 0.301 2.961 1.023 4.767 2.536 4.767 3.701 0 1.242-1.951 2.853-5.118 3.906zM24.2 22.478c0.32 1.623 0.366 3.091 0.154 4.238-0.191 1.031-0.574 1.718-1.048 1.994-1.008 0.586-3.165-0.176-5.49-2.184-0.292-0.254-0.554-0.494-0.81-0.741l0.005 0.005c0.902-0.99 1.803-2.14 2.682-3.418 1.547-0.138 3.008-0.363 4.334-0.671 0.064 0.258 0.122 0.517 0.173 0.777zM10.91 28.609c-0.986 0.349-1.77 0.359-2.244 0.084-1.009-0.584-1.429-2.84-0.857-5.865 0.068-0.357 0.146-0.713 0.234-1.066 1.311 0.291 2.761 0.5 4.312 0.626 0.886 1.251 1.812 2.4 2.747 3.406-0.19 0.185-0.388 0.369-0.591 0.548l-0.018 0.016c-1.242 1.089-2.486 1.862-3.582 2.25zM6.295 19.857c-1.56-0.535-2.849-1.231-3.732-1.99-0.793-0.682-1.194-1.359-1.194-1.909 0-1.17 1.737-2.661 4.634-3.675 0.224-0.086 0.591-0.205 0.962-0.313l0.14-0.035c0.4 1.307 0.925 2.674 1.56 4.056-0.642 1.402-1.175 2.791-1.579 4.114-0.384-0.108-0.647-0.193-0.907-0.284l0.118 0.036zM7.842 9.287c-0.601-3.084-0.202-5.411 0.803-5.995 1.070-0.622 3.437 0.265 5.932 2.488 0.163 0.145 0.323 0.293 0.48 0.445-0.93 1.002-1.848 2.143-2.726 3.385-1.505 0.14-2.945 0.365-4.27 0.666-0.054-0.191-0.13-0.524-0.198-0.86l-0.022-0.129zM21.644 12.708c-0.423-0.738-0.745-1.262-1.077-1.779l0.104 0.173c1.021 0.13 1.999 0.302 2.918 0.512-0.276 0.887-0.62 1.814-1.024 2.765-0.421-0.811-0.727-1.357-1.043-1.897l0.122 0.226zM16.015 7.205c0.631 0.686 1.262 1.451 1.883 2.281-1.26-0.059-2.522-0.060-3.782-0.001 0.64-0.847 1.262-1.59 1.918-2.302l-0.019 0.021zM10.351 12.717c-0.208 0.342-0.509 0.886-0.797 1.437l-0.107 0.224c-0.312-0.702-0.657-1.623-0.957-2.564l-0.059-0.215c0.762-0.181 1.748-0.357 2.749-0.484l0.152-0.016c-0.24 0.362-0.565 0.89-0.878 1.426l-0.103 0.192zM11.361 20.915c-1.048-0.118-2.036-0.276-2.949-0.476 0.366-1.178 0.719-2.118 1.114-3.035l-0.077 0.2c0.69 1.335 1.325 2.418 2.007 3.467l-0.095-0.156zM16.053 24.808c-0.645-0.7-1.276-1.453-1.87-2.236l-0.055-0.076c0.613 0.024 1.238 0.037 1.872 0.037 0.652 0 1.297-0.015 1.931-0.043-0.623 0.85-1.252 1.627-1.878 2.319zM22.577 17.555c0.428 0.978 0.788 1.925 1.074 2.825-0.928 0.212-1.929 0.383-2.985 0.511 0.338-0.538 0.666-1.083 0.983-1.634 0.208-0.342 0.517-0.899 0.813-1.463l0.114-0.239zM20.465 18.571c-0.597 1.043-1.105 1.854-1.637 2.648l0.102-0.162c-0.975 0.069-1.953 0.104-2.93 0.103-0.996 0-1.964-0.031-2.897-0.092-0.46-0.661-0.977-1.473-1.464-2.305l-0.1-0.184c-0.386-0.646-0.841-1.494-1.264-2.36l-0.101-0.228c0.524-1.097 0.978-1.945 1.461-2.774l-0.1 0.185c0.582-1.012 1.095-1.822 1.636-2.61l-0.085 0.131c0.871-0.070 1.885-0.11 2.909-0.11 0.002 0 0.004 0 0.006 0h-0c0.991 0 1.968 0.038 2.919 0.111 0.444 0.644 0.954 1.45 1.436 2.275l0.106 0.196c0.37 0.615 0.829 1.458 1.261 2.318l0.118 0.259c-0.537 1.111-0.995 1.963-1.481 2.796l0.106-0.196zM23.285 3.251c1.072 0.62 1.488 3.121 0.815 6.401-0.067 0.337-0.117 0.552-0.171 0.765l0.027-0.127c-1.328-0.308-2.769-0.536-4.278-0.678-0.879-1.256-1.79-2.399-2.704-3.388 0.229-0.222 0.468-0.443 0.713-0.658l0.023-0.019c2.362-2.063 4.57-2.878 5.576-2.296zM16 13.091c1.578 0 2.857 1.284 2.857 2.868s-1.279 2.868-2.857 2.868-2.857-1.284-2.857-2.868c0-1.584 1.279-2.868 2.857-2.868z"
          ></path>
        </svg>
      );
    case "redux":
      return (
        <svg id="icon-redux" viewBox="0 0 32 32">
          <path
            fill="#764abc"
            d="M22.155 21.962c1.18-0.122 2.075-1.14 2.034-2.36s-1.058-2.197-2.278-2.197h-0.081c-1.262 0.041-2.238 1.099-2.197 2.36 0.041 0.61 0.285 1.139 0.651 1.506-1.383 2.726-3.499 4.72-6.673 6.388-2.156 1.139-4.394 1.546-6.632 1.262-1.831-0.244-3.255-1.058-4.151-2.401-1.302-1.994-1.424-4.151-0.325-6.307 0.773-1.546 1.993-2.686 2.767-3.255-0.163-0.529-0.407-1.424-0.529-2.075-5.9 4.273-5.29 10.051-3.499 12.777 1.342 2.035 4.069 3.296 7.080 3.296 0.814 0 1.628-0.081 2.441-0.285 5.208-1.017 9.155-4.11 11.393-8.708zM29.317 16.916c-3.092-3.622-7.65-5.616-12.858-5.616h-0.651c-0.366-0.732-1.139-1.221-1.994-1.221h-0.081c-1.261 0.041-2.238 1.099-2.197 2.36 0.041 1.221 1.058 2.197 2.279 2.197h0.081c0.895-0.041 1.668-0.61 1.994-1.384h0.732c3.092 0 6.022 0.895 8.667 2.645 2.034 1.343 3.499 3.093 4.313 5.208 0.692 1.709 0.651 3.378-0.081 4.802-1.139 2.157-3.052 3.337-5.574 3.337-1.627 0-3.174-0.488-3.988-0.855-0.447 0.407-1.261 1.058-1.831 1.465 1.75 0.814 3.54 1.262 5.249 1.262 3.906 0 6.795-2.157 7.894-4.314 1.18-2.36 1.099-6.429-1.953-9.888zM8.646 22.654c0.041 1.221 1.058 2.197 2.278 2.197h0.082c1.261-0.041 2.238-1.099 2.197-2.36-0.041-1.221-1.058-2.197-2.279-2.197h-0.081c-0.082 0-0.204 0-0.285 0.041-1.668-2.767-2.36-5.778-2.116-9.033 0.162-2.441 0.976-4.557 2.401-6.307 1.18-1.506 3.458-2.238 5.005-2.278 4.313-0.082 6.144 5.29 6.266 7.446 0.529 0.122 1.424 0.407 2.035 0.61-0.488-6.592-4.557-10.010-8.463-10.010-3.663 0-7.040 2.645-8.382 6.551-1.872 5.208-0.651 10.214 1.627 14.16-0.203 0.285-0.325 0.733-0.285 1.18z"
          ></path>
        </svg>
      );
    case "tailwind":
      return (
        <svg id="icon-tailwind" viewBox="0 0 32 32">
          <path
            fill="#44a8b3"
            d="M9 13.7c0.933-3.733 3.267-5.6 7-5.6 5.6 0 6.3 4.2 9.1 4.9 1.867 0.467 3.5-0.234 4.9-2.1-0.933 3.733-3.266 5.6-7 5.6-5.6 0-6.3-4.2-9.1-4.9-1.867-0.467-3.5 0.234-4.9 2.1zM2 22.1c0.933-3.733 3.267-5.6 7-5.6 5.6 0 6.3 4.2 9.1 4.9 1.867 0.467 3.5-0.234 4.9-2.1-0.934 3.733-3.267 5.6-7 5.6-5.6 0-6.3-4.2-9.1-4.9-1.867-0.467-3.5 0.233-4.9 2.1z"
          ></path>
        </svg>
      );
    case "sass":
      return (
        <svg id="icon-sass" viewBox="0 0 32 32">
          <path
            fill="#cd6799"
            d="M27.535 17.799c-1.113 0.005-2.081 0.271-2.891 0.665-0.297-0.584-0.594-1.104-0.647-1.485-0.058-0.445-0.128-0.717-0.058-1.248s0.385-1.289 0.379-1.346-0.070-0.329-0.711-0.335c-0.641-0.006-1.195 0.121-1.259 0.289s-0.187 0.549-0.268 0.942c-0.111 0.578-1.282 2.641-1.953 3.722-0.216-0.422-0.402-0.792-0.443-1.086-0.058-0.445-0.128-0.717-0.058-1.248s0.385-1.289 0.379-1.346c-0.006-0.058-0.070-0.33-0.711-0.335s-1.195 0.121-1.259 0.289-0.134 0.561-0.268 0.942c-0.134 0.382-1.69 3.826-2.098 4.716-0.234 0.518-0.407 0.869-0.588 1.216l0.070-0.147s-0.006 0.017-0.024 0.046c-0.057 0.11-0.115 0.22-0.175 0.329v0.005c-0.088 0.156-0.181 0.301-0.227 0.301-0.035 0-0.099-0.416 0.012-0.982 0.233-1.196 0.787-3.057 0.781-3.121 0-0.035 0.105-0.358-0.361-0.526-0.455-0.168-0.618 0.11-0.659 0.11s-0.070 0.098-0.070 0.098 0.507-2.092-0.967-2.092c-0.921 0-2.192 1-2.821 1.901-0.716 0.386-1.43 0.773-2.145 1.162-0.344 0.191-0.699 0.381-1.032 0.561-0.023-0.023-0.046-0.052-0.070-0.075-1.783-1.89-5.082-3.225-4.942-5.762 0.052-0.925 0.373-3.352 6.335-6.299 4.907-2.399 8.813-1.734 9.489-0.26 0.967 2.103-2.092 6.010-7.163 6.576-1.935 0.214-2.949-0.526-3.206-0.803-0.268-0.289-0.309-0.306-0.408-0.249-0.163 0.087-0.058 0.347 0 0.497 0.152 0.393 0.775 1.087 1.83 1.428 0.933 0.3 3.2 0.468 5.945-0.584 3.071-1.179 5.473-4.455 4.768-7.201-0.705-2.785-5.368-3.704-9.78-2.15-2.623 0.925-5.467 2.381-7.513 4.276-2.43 2.254-2.815 4.213-2.658 5.034 0.566 2.913 4.616 4.808 6.237 6.212-0.082 0.047-0.158 0.087-0.222 0.122-0.81 0.398-3.899 1.999-4.669 3.692-0.874 1.919 0.14 3.294 0.81 3.479 2.081 0.572 4.22-0.456 5.368-2.155s1.008-3.907 0.478-4.918c-0.006-0.012-0.012-0.023-0.024-0.035 0.21-0.121 0.426-0.248 0.635-0.37 0.386-0.226 0.776-0.444 1.172-0.653-0.198 0.538-0.344 1.179-0.414 2.104-0.088 1.086 0.361 2.496 0.95 3.051 0.263 0.243 0.571 0.249 0.769 0.249 0.688 0 0.997-0.566 1.341-1.237 0.42-0.82 0.799-1.774 0.799-1.774s-0.473 2.578 0.81 2.578c0.466 0 0.938-0.601 1.148-0.907v0.005s0.011-0.017 0.035-0.057c0.046-0.075 0.076-0.122 0.076-0.122v-0.011c0.186-0.324 0.606-1.058 1.23-2.277 0.804-1.572 1.579-3.536 1.579-3.536s0.070 0.479 0.309 1.277c0.14 0.468 0.431 0.982 0.664 1.479-0.116 0.164-0.216 0.295-0.318 0.424l0.015-0.020 0.006 0.006c-0.152 0.196-0.315 0.41-0.495 0.618-0.635 0.751-1.393 1.613-1.498 1.861-0.123 0.295-0.093 0.509 0.14 0.682 0.169 0.127 0.472 0.144 0.781 0.127 0.571-0.040 0.973-0.179 1.171-0.266 0.309-0.11 0.67-0.277 1.008-0.526 0.624-0.457 1.002-1.11 0.967-1.971-0.017-0.474-0.175-0.948-0.367-1.393 0.058-0.081 0.111-0.162 0.169-0.243 0.985-1.428 1.748-2.994 1.748-2.994s0.070 0.48 0.309 1.277c0.116 0.405 0.356 0.844 0.565 1.271-0.927 0.746-1.498 1.612-1.702 2.179-0.367 1.052-0.082 1.526 0.461 1.636 0.244 0.052 0.594-0.064 0.851-0.173 0.327-0.104 0.711-0.283 1.079-0.549 0.624-0.456 1.224-1.092 1.189-1.953-0.017-0.393-0.123-0.781-0.268-1.156 0.787-0.324 1.801-0.503 3.095-0.353 2.774 0.324 3.322 2.040 3.217 2.762s-0.688 1.115-0.88 1.237c-0.193 0.121-0.257 0.162-0.239 0.248 0.023 0.127 0.116 0.121 0.28 0.098 0.227-0.040 1.457-0.584 1.509-1.913 0.088-1.699-1.544-3.554-4.43-3.537zM6.133 24.953c-0.921 0.994-2.203 1.369-2.757 1.052-0.595-0.341-0.362-1.809 0.769-2.861 0.688-0.641 1.573-1.237 2.162-1.601 0.134-0.081 0.332-0.196 0.571-0.341 0.041-0.023 0.064-0.035 0.064-0.035l0.14-0.087c0.414 1.502 0.018 2.826-0.95 3.872zM12.835 20.433c-0.321 0.775-0.991 2.757-1.399 2.647-0.35-0.092-0.565-1.595-0.070-3.080 0.251-0.746 0.781-1.636 1.090-1.982 0.501-0.555 1.055-0.74 1.189-0.514 0.169 0.295-0.612 2.444-0.81 2.93zM18.366 23.057c-0.134 0.069-0.262 0.116-0.321 0.081-0.041-0.023 0.058-0.116 0.058-0.116s0.694-0.74 0.968-1.075c0.157-0.196 0.344-0.427 0.542-0.688v0.075c0 0.884-0.863 1.479-1.247 1.722zM22.633 22.092c-0.099-0.069-0.082-0.301 0.251-1.023 0.128-0.283 0.431-0.757 0.95-1.214 0.058 0.185 0.099 0.364 0.093 0.532-0.006 1.115-0.81 1.532-1.294 1.705z"
          ></path>
        </svg>
      );
    case "nextjs":
      return (
        <svg id="icon-nextjs" viewBox="0 0 32 32">
          <path d="M14.952 0.009c-0.069 0.006-0.288 0.028-0.485 0.044-4.545 0.41-8.802 2.862-11.499 6.63-1.502 2.095-2.462 4.473-2.825 6.99-0.128 0.879-0.144 1.138-0.144 2.33s0.016 1.451 0.144 2.33c0.87 6.008 5.146 11.056 10.945 12.926 1.039 0.335 2.133 0.563 3.378 0.701 0.485 0.053 2.581 0.053 3.065 0 2.149-0.238 3.97-0.769 5.765-1.686 0.275-0.141 0.328-0.178 0.291-0.21-0.025-0.019-1.198-1.592-2.606-3.494l-2.559-3.456-3.206-4.745c-1.764-2.608-3.216-4.742-3.228-4.742-0.012-0.003-0.025 2.105-0.031 4.679-0.009 4.507-0.012 4.688-0.069 4.795-0.081 0.153-0.144 0.216-0.275 0.285-0.1 0.050-0.188 0.059-0.66 0.059h-0.541l-0.144-0.091c-0.089-0.056-0.16-0.134-0.208-0.225l-0.002-0.003-0.066-0.141 0.006-6.271 0.009-6.274 0.097-0.122c0.050-0.066 0.156-0.15 0.232-0.191 0.128-0.063 0.178-0.069 0.719-0.069 0.638 0 0.745 0.025 0.91 0.206 0.047 0.050 1.783 2.665 3.86 5.814s4.918 7.45 6.313 9.561l2.534 3.837 0.128-0.084c1.136-0.738 2.337-1.789 3.288-2.884 2.024-2.324 3.328-5.157 3.766-8.178 0.128-0.879 0.144-1.139 0.144-2.33s-0.016-1.451-0.144-2.33c-0.87-6.008-5.146-11.056-10.945-12.926-1.023-0.332-2.111-0.56-3.331-0.698-0.3-0.031-2.368-0.066-2.627-0.041zM21.502 9.685c0.15 0.075 0.272 0.219 0.316 0.369 0.025 0.081 0.031 1.82 0.025 5.739l-0.009 5.623-0.992-1.52-0.995-1.52v-4.088c0-2.643 0.012-4.128 0.031-4.2 0.050-0.175 0.16-0.313 0.31-0.394 0.128-0.066 0.175-0.072 0.666-0.072 0.463 0 0.544 0.006 0.648 0.063z"></path>
        </svg>
      );
    case "github":
      return (
        <svg id="icon-github" viewBox="0 0 32 32">
          <path d="M16 0c-8.84 0-16 7.16-16 16 0 7.080 4.58 13.060 10.94 15.18 0.8 0.14 1.1-0.34 1.1-0.76 0-0.38-0.020-1.64-0.020-2.98-4.020 0.74-5.060-0.98-5.38-1.88-0.18-0.46-0.96-1.88-1.64-2.26-0.56-0.3-1.36-1.040-0.020-1.060 1.26-0.020 2.16 1.16 2.46 1.64 1.44 2.42 3.74 1.74 4.66 1.32 0.14-1.040 0.56-1.74 1.020-2.14-3.56-0.4-7.28-1.78-7.28-7.9 0-1.74 0.62-3.18 1.64-4.3-0.16-0.4-0.72-2.040 0.16-4.24 0 0 1.34-0.42 4.4 1.64 1.28-0.36 2.64-0.54 4-0.54s2.72 0.18 4 0.54c3.060-2.080 4.4-1.64 4.4-1.64 0.88 2.2 0.32 3.84 0.16 4.24 1.020 1.12 1.64 2.54 1.64 4.3 0 6.14-3.74 7.5-7.3 7.9 0.58 0.5 1.080 1.46 1.080 2.96 0 2.14-0.020 3.86-0.020 4.4 0 0.42 0.3 0.92 1.1 0.76 6.39-2.204 10.898-8.165 10.9-15.18v-0c0-8.84-7.16-16-16-16z"></path>
        </svg>
      );
    case "git-icon":
      return (
        <svg id="icon-git-icon" viewBox="0 0 32 32">
          <path
            fill="#de4c36"
            d="M31.397 14.574l-13.971-13.971c-0.373-0.373-0.888-0.604-1.457-0.604s-1.084 0.231-1.457 0.604l-2.901 2.901 3.681 3.68c0.235-0.083 0.506-0.13 0.787-0.13 0.676 0 1.287 0.274 1.73 0.717v0c0.443 0.443 0.716 1.055 0.716 1.731 0 0.287-0.049 0.563-0.14 0.819l0.005-0.017 3.547 3.547c0.858-0.296 1.848-0.105 2.534 0.582 0.444 0.444 0.718 1.057 0.718 1.734s-0.275 1.29-0.718 1.734v0c-0.444 0.445-1.058 0.72-1.735 0.72-1.354 0-2.452-1.098-2.452-2.452 0-0.337 0.068-0.658 0.191-0.951l-0.006 0.016-3.308-3.308-0.001 8.705c0.25 0.125 0.464 0.28 0.649 0.464l-0-0c0.444 0.444 0.718 1.057 0.718 1.734s-0.274 1.29-0.718 1.734v0c-0.958 0.958-2.511 0.958-3.467 0-0.444-0.444-0.719-1.057-0.719-1.735 0-1.019 0.621-1.892 1.505-2.263l0.016-0.006v-8.786c-0.313-0.13-0.579-0.311-0.802-0.535l-0-0c-0.726-0.725-0.9-1.79-0.528-2.681l-3.628-3.628-9.58 9.579c-0.373 0.373-0.604 0.888-0.604 1.458s0.231 1.085 0.604 1.458l13.972 13.971c0.373 0.373 0.888 0.603 1.457 0.603s1.084-0.231 1.457-0.603l13.906-13.906c0.373-0.373 0.604-0.888 0.604-1.458s-0.231-1.085-0.604-1.458v0z"
          ></path>
        </svg>
      );
    case "framer-motion":
      return (
        <svg id="icon-framer-motion" viewBox="0 0 32 32">
          <path fill="#59529d" d="M32 0v16l-16 16-8-8 8-8z"></path>
          <path fill="#5271b4" d="M32 16v16l-8-8z"></path>
          <path fill="#bb4b96" d="M16 16l-16 16v-32l8 8z"></path>
        </svg>
      );
    case "vscode":
      return (
        <svg id="icon-vscode" viewBox="0 0 32 32">
          <path
            fill="#0065a9"
            d="M29.010 5.030l-5.766-2.776c-0.221-0.109-0.481-0.173-0.757-0.173-0.481 0-0.917 0.195-1.232 0.511l-0 0-18.875 17.208c-0.235 0.214-0.382 0.522-0.382 0.863 0 0.34 0.146 0.647 0.379 0.86l0.001 0.001 1.541 1.4c0.206 0.188 0.482 0.303 0.784 0.303 0.266 0 0.511-0.089 0.708-0.239l-0.003 0.002 22.735-17.24c0.192-0.147 0.436-0.236 0.7-0.236 0.639 0 1.158 0.518 1.158 1.157v0-0.067c-0-0.69-0.399-1.286-0.98-1.57l-0.010-0.005z"
          ></path>
          <path
            fill="#007acc"
            d="M29.010 26.97l-5.766 2.777c-0.221 0.108-0.481 0.172-0.756 0.172-0.482 0-0.918-0.195-1.233-0.51l0 0-18.875-17.209c-0.235-0.214-0.382-0.522-0.382-0.863 0-0.34 0.146-0.647 0.379-0.86l0.001-0.001 1.541-1.4c0.206-0.189 0.482-0.305 0.785-0.305 0.267 0 0.513 0.090 0.709 0.241l-0.003-0.002 22.732 17.24c0.192 0.147 0.436 0.236 0.7 0.236 0.639 0 1.158-0.518 1.158-1.157v-0 0.072c-0.003 0.688-0.401 1.282-0.98 1.565l-0.010 0.005z"
          ></path>
          <path
            fill="#1f9cf0"
            d="M23.244 29.747c-0.221 0.108-0.481 0.172-0.756 0.172-0.482 0-0.918-0.195-1.233-0.51l0 0c0.185 0.183 0.439 0.295 0.72 0.295 0.142 0 0.277-0.029 0.4-0.081l-0.007 0.003c0.373-0.158 0.63-0.52 0.632-0.942v-25.368c0-0 0-0 0-0.001 0-0.566-0.458-1.024-1.024-1.024-0.283 0-0.539 0.115-0.725 0.301l-0 0c0.316-0.316 0.752-0.511 1.233-0.511 0.275 0 0.535 0.064 0.766 0.177l-0.010-0.005 5.765 2.772c0.593 0.287 0.995 0.884 0.995 1.575v18.8c0 0 0 0 0 0 0 0.69-0.4 1.287-0.981 1.571l-0.010 0.005-5.765 2.771z"
          ></path>
        </svg>
      );

    default:
      return "SVG not found";
  }
};

SpriteSVG.propTypes = {
  name: PropTypes.oneOf([
    "css",
    "html",
    "sass",
    "js",
    "tailwind",
    "vscode",
    "redux",
    "framer-motion",
    "github",
    "react",
    "nextjs",
    "git-icon",
  ]).isRequired,
};