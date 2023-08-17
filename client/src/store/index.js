import { proxy } from "valtio";


const state = proxy({
    intro: true,
    color: '#DD3467',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
})

export default state