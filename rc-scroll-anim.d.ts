///<reference path='../react/react.d.ts' />

declare module 'rc-scroll-anim' {
    export import React = __React;
    interface OverPackProps extends React.HTMLAttributes, React.Props<OverPack> {
        component?: string
        playScale?: number
        always?: boolean
        scrollEvent?: (e?: React.WheelEvent) => any
        scrollName: string
        replay?: boolean
    }
    export class OverPack extends React.Component<OverPackProps, {}>{}
    
    interface ScrollLinkProps extends React.HTMLAttributes, React.Props<Link> {
        component?: string
        duration?: number
        active?: string,
        showHeightActive?: string | number | number[]
        ease?: string
        onClick?: (e?: React.MouseEvent) => any
        onFocus?: (e?: React.FocusEvent) => any
        onBlur?: (e?: React.FocusEvent) => any
        location: string
        toShowHeight?: boolean
        className: string
    }
    
    export class Link extends React.Component<ScrollLinkProps, {}>{}
    
    interface SrollElementProps extends React.HTMLAttributes, React.Props<Element> {
        scrollName: string
        component?: string
    }
    
    export class Element extends React.Component<SrollElementProps, {}>{}
    
    interface AnimationInterface {
        playScale?: number[]
        ease?: string
        onUpdate?: (easeValue?: string) => any
        onStart?: (number?) => any
        onComplete?: (number?) => any
    } 
    
    interface ParallaxProps extends React.HTMLAttributes, React.Props<Parallax> {
        animation?: AnimationInterface | AnimationInterface[]
        localtion?: string
        always?: boolean
        scrollName: string
        component?: string
    }
    
    export class Parallax extends React.Component<ParallaxProps, {}>{}
    
    interface Vars {
        duration?: number
        ease?: string
        docHeight?: number | any
        loop?: boolean
        scrollInterval?: number
    }
    
    interface scrollScreen {
        init: (vars?: Vars) => void
        unMount: () => void
    }
    
    export var scrollScreen: scrollScreen
    
    interface Event {
        addEventListener: (type: string, listener: (e?: any) => any) => any
        removeEventListener: (type: string, listener: (e?: any) => any) => any        
    }
    
    export var Event: Event
}
