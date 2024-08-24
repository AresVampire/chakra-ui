"use client"

import { Progress as ArkProgress } from "@ark-ui/react/progress"
import type { Assign } from "@chakra-ui/utils"
import {
  type HTMLChakraProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useProgressCircleStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "progressCircle" })

export { useProgressCircleStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface ProgressCircleRootBaseProps
  extends Assign<ArkProgress.RootBaseProps, SlotRecipeProps<"progressCircle">>,
    UnstyledProp {}

export interface ProgressCircleRootProps
  extends HTMLChakraProps<"div", ProgressCircleRootBaseProps> {}

export const ProgressCircleRoot = withProvider<
  HTMLDivElement,
  ProgressCircleRootProps
>(ArkProgress.Root, "root")

export const ProgressCircleRootPropsProvider =
  PropsProvider as React.Provider<ProgressCircleRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface ProgressCircleLabelProps
  extends HTMLChakraProps<"div", ArkProgress.LabelBaseProps> {}

export const ProgressCircleLabel = withContext<
  HTMLDivElement,
  ProgressCircleLabelProps
>(ArkProgress.Label, "label", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ProgressCircleCircleProps
  extends HTMLChakraProps<"svg", ArkProgress.CircleBaseProps> {}

export const ProgressCircleCircle = withContext<
  SVGSVGElement,
  ProgressCircleCircleProps
>(ArkProgress.Circle, "circle", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ProgressCircleTrackProps
  extends HTMLChakraProps<"circle", ArkProgress.TrackBaseProps> {}

export const ProgressCircleTrack = withContext<
  SVGCircleElement,
  ProgressCircleTrackProps
>(ArkProgress.CircleTrack, "circleTrack", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ProgressCircleRangeProps
  extends HTMLChakraProps<"circle", ArkProgress.RangeBaseProps> {}

export const ProgressCircleRange = withContext<
  SVGCircleElement,
  ProgressCircleRangeProps
>(ArkProgress.CircleRange, "circleRange", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ProgressCircleValueTextProps
  extends HTMLChakraProps<"div", ArkProgress.ValueTextBaseProps> {}

export const ProgressCircleValueText = withContext<
  HTMLDivElement,
  ProgressCircleValueTextProps
>(ArkProgress.ValueText, "valueText", { forwardAsChild: true })
