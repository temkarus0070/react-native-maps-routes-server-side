// biome-ignore lint/style/useImportType: <to comment>
import React from "react";
import {
    type LatLng,
    type LineCapType,
    type LineJoinType,
    Polyline,
} from "react-native-maps";

const DEFAULT_STROKE_COLOR = "#000";
const DEFAULT_STROKE_WIDTH = 6;
const DEFAULT_LINE_JOIN: LineJoinType = "round";
const DEFAULT_LINE_CAP: LineCapType = "round";



type Props = {
    strokeColor?: string;
    strokeWidth?: number;
    lineJoin?: LineJoinType;
    lineCap?: LineCapType;
    coordinates: LatLng[]
};

export const MapViewRoute: React.FC<Props> = ({
                                                  strokeColor = DEFAULT_STROKE_COLOR,
                                                  strokeWidth = DEFAULT_STROKE_WIDTH,
                                                  lineJoin = DEFAULT_LINE_JOIN,
                                                  lineCap = DEFAULT_LINE_CAP,
                                                  coordinates = []
                                              }) => {

    return (
        <Polyline
            coordinates={coordinates}
            strokeColor={strokeColor}
            strokeWidth={strokeWidth}
            lineJoin={lineJoin}
            lineCap={lineCap}
        />
    );
};
