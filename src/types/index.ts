import { Dispatch, MutableRefObject, SetStateAction } from "react"
import * as THREE from "three";

export interface Video {
  isEnd: boolean;
  startPlay: boolean;
  videoId: number;
  isLastVideo: boolean;
  isPlaying: boolean;
}

export interface ModelProps {
  title: string
  color: string[]
  img: string
}

export interface ViewProps {
  index: number
  groupRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>
  gsapType:string
  controlRef: MutableRefObject<undefined>
  setRotationState: Dispatch<SetStateAction<number>>
  item: ModelProps
  size: string
}

export interface IPhoneProps {
  index: number
  item: ModelProps
  size: string
}

export interface MeshComponentProps {
  index: number
  item: ModelProps
  size: string
  scale: [number, number, number]
}

