import React from "react";
import Svg, {Circle, Path} from "react-native-svg"

type IconProps = {
    color?: string
    height?: number
    width?: number
}

type IconName = "home" | "completed" | "categories" | "calendar"
const Home = ({color = "black", height = 20, width = 20}) => (
    <Svg width={width} height={height} viewBox="0 0 19 20" fill="none">
        <Path
            d=""
            stroke={color}
        />
    </Svg>
)

const Completed = ({color = "black", height = 20, width = 20}: IconProps) => (
    <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
        <Circle cx={9.5} cy={9} r={8.5} stroke={color}/>
        <Path
            d=""
            stroke={color}
            strokeLinecap="round"
        />
    </Svg>
)

const Calendar = ({color = "black", height = 20, width = 20}: IconProps) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
        <Path
            d="M482.513,83.942c-7.225-7.233-15.797-10.85-25.694-10.85h-36.541v-27.41c0-12.56-4.477-23.315-13.422-32.261
            C397.906,4.475,387.157,0,374.591,0h-18.268c-12.565,0-23.318,4.475-32.264,13.422c-8.949,8.945-13.422,19.701-13.422,32.261v27.41
            h-109.63v-27.41c0-12.56-4.475-23.315-13.422-32.261C178.64,4.475,167.886,0,155.321,0H137.05
            c-12.562,0-23.317,4.475-32.264,13.422c-8.945,8.945-13.421,19.701-13.421,32.261v27.41H54.823c-9.9,0-18.464,3.617-25.697,10.85
            c-7.233,7.232-10.85,15.8-10.85,25.697v365.453c0,9.89,3.617,18.456,10.85,25.693c7.232,7.231,15.796,10.849,25.697,10.849h401.989
            c9.897,0,18.47-3.617,25.694-10.849c7.234-7.234,10.852-15.804,10.852-25.693V109.639
            C493.357,99.739,489.743,91.175,482.513,83.942z M137.047,475.088H54.823v-82.23h82.224V475.088z M137.047,374.59H54.823v-91.358
            h82.224V374.59z M137.047,264.951H54.823v-82.223h82.224V264.951z M130.627,134.333c-1.809-1.809-2.712-3.946-2.712-6.423V45.686
            c0-2.474,0.903-4.617,2.712-6.423c1.809-1.809,3.946-2.712,6.423-2.712h18.271c2.474,0,4.617,0.903,6.423,2.712
            c1.809,1.807,2.714,3.949,2.714,6.423v82.224c0,2.478-0.909,4.615-2.714,6.423c-1.807,1.809-3.946,2.712-6.423,2.712H137.05
            C134.576,137.046,132.436,136.142,130.627,134.333z M246.683,475.088h-91.365v-82.23h91.365V475.088z M246.683,374.59h-91.365
            v-91.358h91.365V374.59z M246.683,264.951h-91.365v-82.223h91.365V264.951z M356.323,475.088h-91.364v-82.23h91.364V475.088z
            M356.323,374.59h-91.364v-91.358h91.364V374.59z M356.323,264.951h-91.364v-82.223h91.364V264.951z M349.896,134.333
            c-1.807-1.809-2.707-3.946-2.707-6.423V45.686c0-2.474,0.9-4.617,2.707-6.423c1.808-1.809,3.949-2.712,6.427-2.712h18.268
            c2.478,0,4.617,0.903,6.427,2.712c1.808,1.807,2.707,3.949,2.707,6.423v82.224c0,2.478-0.903,4.615-2.707,6.423
            c-1.807,1.809-3.949,2.712-6.427,2.712h-18.268C353.846,137.046,351.697,136.142,349.896,134.333z M456.812,475.088h-82.228v-82.23
            h82.228V475.088z M456.812,374.59h-82.228v-91.358h82.228V374.59z M456.812,264.951h-82.228v-82.223h82.228V264.951z"
            stroke={color}
        />
        <Path d="M4.5 3.19512v1" stroke={color} strokeLinecap="round"/>
        <Path d="M14 3.19512V1" stroke={color} strokeLinecap="round"/>
    </Svg>
)

const Categories = ({color = "black", height = 20, width = 20}: IconProps) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
        <Path
            d=""
            stroke={color}
            strokeLinecap="round"
        />
        <Path
            d=""
            stroke={color}
            strokeLinecap="round"
        />
        <Path
            d=""
            stroke={color}
            strokeLinecap="round"
        />
        <Path
            d=""
            stroke={color}
            strokeLinecap="round"
        />
    </Svg>
)

const Icons = ({
                   name,
                   color,
                   height,
                   width
               }: IconProps & { name: IconName }) => {
    switch (name) {
        case "home":
            return <Home color={color} height={height} width={width}/>
        case "completed":
            return <Completed color={color} height={height} width={width}/>
        case "categories":
            return <Categories color={color} height={height} width={width}/>
        case "calendar":
            return <Calendar color={color} height={height} width={width}/>
    }
}

export default Icons