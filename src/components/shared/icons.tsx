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
            d="M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041
            c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629
            c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939    z"
            stroke={color}
        />
        <Path
            d="M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816
            c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245
            c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136
            c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998
            L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125
            c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z"
            stroke={color}
        />
    </Svg>
)

const Completed = ({color = "black", height = 20, width = 20}: IconProps) => (
    <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
        <Circle cx={9.5} cy={9} r={8.5} stroke={color}/>
        <Path
            d="M9.71,11.29a1,1,0,0,0-1.42,1.42l3,3A1,1,0,0,0,12,16h0a1,1,0,0,0,.72-.34l7-8a1,1,0,0,0-1.5-1.32L12,13.54Z"
            stroke={color}
            strokeLinecap="round"
        />
        <Path
            d="M21,11h0a1,1,0,0,0-1,1,8,8,0,0,1-8,8h0A8,8,0,0,1,6.33,6.36,7.93,7.93,0,0,1,12,4a8.79,8.79,0,0,1,1.9.22,1,1,0,1,0,.47-1.94A10.54,10.54,0,0,0,12,2,10,10,0,0,0,5,19.09,9.93,9.93,0,0,0,12,22h0A10,10,0,0,0,22,12,1,1,0,0,0,21,11Z"
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
            d="M5.9199,11.4697 C7.3299,11.4697 8.4599,12.6107 8.4599,14.0307 L8.4599,14.0307 L8.4599,17.4397 C8.4599,18.8497 7.3299,19.9997 5.9199,19.9997
            L5.9199,19.9997 L2.5399,19.9997 C1.1399,19.9997 -0.0001,18.8497 -0.0001,17.4397 L-0.0001,17.4397 L-0.0001,14.0307 C-0.0001,12.6107 1.1399,11.4697 2.5399,11.4697
            L2.5399,11.4697 Z M17.46,11.4697 C18.86,11.4697 20,12.6107 20,14.0307 L20,14.0307 L20,17.4397 C20,18.8497 18.86,19.9997 17.46,19.9997 L17.46,19.9997 L14.08,19.9997
            C12.67,19.9997 11.54,18.8497 11.54,17.4397 L11.54,17.4397 L11.54,14.0307 C11.54,12.6107 12.67,11.4697 14.08,11.4697 L14.08,11.4697 Z M5.9199,-9.32587341e-14
            C7.3299,-9.32587341e-14 8.4599,1.15 8.4599,2.561 L8.4599,2.561 L8.4599,5.97 C8.4599,7.39 7.3299,8.53 5.9199,8.53 L5.9199,8.53 L2.5399,8.53 C1.1399,8.53 -0.0001,7.39 -0.0001,5.97
            L-0.0001,5.97 L-0.0001,2.561 C-0.0001,1.15 1.1399,-9.32587341e-14 2.5399,-9.32587341e-14 L2.5399,-9.32587341e-14 Z M17.46,-9.32587341e-14 C18.86,-9.32587341e-14 20,1.15 20,2.561
            L20,2.561 L20,5.97 C20,7.39 18.86,8.53 17.46,8.53 L17.46,8.53 L14.08,8.53 C12.67,8.53 11.54,7.39 11.54,5.97 L11.54,5.97 L11.54,2.561 C11.54,1.15 12.67,-9.32587341e-14 14.08,-9.32587341e-14
            L14.08,-9.32587341e-14 Z"
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