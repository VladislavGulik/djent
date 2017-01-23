import React, { Component } from 'react'
import { logError } from 'utils/tools'

class SVG extends Component {
    shouldComponentUpdate = nextProps =>
        nextProps.icon !== this.props.icon
        || nextProps.className !== this.props.className

    render = () => {
        const { icon, className } = this.props
        const iconObj = icons[icon]

        if (!iconObj) {
            logError('No icon given to SVG component')
            return null
        }

        const pathProps = iconObj.pathProps || {}

        return (
            <svg className={`${className || ''} svg-icon-${icon}`} viewBox={iconObj.viewBox}>
                <path { ...pathProps } fill="currentColor" d={iconObj.pathCoordinates} />
            </svg>
        )
    }
}

export default SVG

const icons = {
    copy: {
        viewBox: '0 0 32 32',
        pathCoordinates: 'M20 8v-8h-14l-6 6v18h12v8h20v-24h-12zM6 2.828v3.172h-3.172l3.172-3.172zM2 22v-14h6v-6h10v6l-6 6v8h-10zM18 10.828v3.172h-3.172l3.172-3.172zM30 30h-16v-14h6v-6h10v20z'
    },

    cross: {
        viewBox: '0 0 32 32',
        pathCoordinates: 'M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z'
    },

    gear: {
        viewBox: '0 0 32 32',
        pathCoordinates: 'M29.181 19.070c-1.679-2.908-0.669-6.634 2.255-8.328l-3.145-5.447c-0.898 0.527-1.943 0.829-3.058 0.829-3.361 0-6.085-2.742-6.085-6.125h-6.289c0.008 1.044-0.252 2.103-0.811 3.070-1.679 2.908-5.411 3.897-8.339 2.211l-3.144 5.447c0.905 0.515 1.689 1.268 2.246 2.234 1.676 2.903 0.672 6.623-2.241 8.319l3.145 5.447c0.895-0.522 1.935-0.82 3.044-0.82 3.35 0 6.067 2.725 6.084 6.092h6.289c-0.003-1.034 0.259-2.080 0.811-3.038 1.676-2.903 5.399-3.894 8.325-2.219l3.145-5.447c-0.899-0.515-1.678-1.266-2.232-2.226zM16 22.479c-3.578 0-6.479-2.901-6.479-6.479s2.901-6.479 6.479-6.479c3.578 0 6.479 2.901 6.479 6.479s-2.901 6.479-6.479 6.479z'
    },

    lock: {
        viewBox: '3 0 14 20',
        pathCoordinates: 'M 10 0 C 6.6862915 0 4 2.6862915 4 6 L 4 9 L 3 9 L 3 20 L 17 20 L 17 9 L 16 9 L 16 6 C 16 2.6862915 13.313708 0 10 0 z M 10 2 C 12.209139 2 14 3.7908602 14 6 L 14 9 L 6 9 L 6 6 C 6 3.7908602 7.790861 2 10 2 z'
    },

    loop: {
        viewBox: '0 0 24 24',
        pathCoordinates: 'M17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031h-1.969v-6h12v-3l3.984 3.984-3.984 3.984v-3h-10.031z'
    },

    loop_single: {
        viewBox: '0 0 24 24',
        pathCoordinates: 'M12.984 15h-1.5v-3.984h-1.5v-1.031l2.016-0.984h0.984v6zM17.016 17.016v-4.031h1.969v6h-12v3l-3.984-3.984 3.984-3.984v3h10.031zM6.984 6.984v4.031h-1.969v-6h12v-3l3.984 3.984-3.984 3.984v-3h-10.031z'
    },

    play: {
        viewBox: '0 0 864 864',
        pathCoordinates: 'M18 0q-5 0 -10 3q-8 5 -8 15v828q0 10 8 15q9 6 18 1l828 -414q10 -5 10 -16t-10 -16l-828 -414q-6 -2 -8 -2z'
    },

    plus: {
        viewBox: '0 0 32 32',
        pathCoordinates: 'M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z'
    },

    stop: {
        viewBox: '0 0 864 864',
        pathCoordinates: 'M864 18q0 -8 -5 -13t-13 -5h-828q-8 0 -13 5t-5 13v828q0 8 5 13t13 5h828q8 0 13 -5t5 -13v-828z'
    },
}
