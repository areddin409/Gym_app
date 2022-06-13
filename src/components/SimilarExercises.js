import React from "react"
import { Typography, Stack, Box } from "@mui/material"
import HorizontalScrollBar from "./HorizontalScrollBar"
import Loader from "./Loader"

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant='h3' mb='33px'>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
