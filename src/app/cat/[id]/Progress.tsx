"use client"

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

interface ProgressProps {
  label: string
  value: number
  variant: "determinate" | "indeterminate" | "buffer" | "query" | undefined
}

const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 2,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[500],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[100],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#981aff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#7a18c9',
    }),
  },
}))

export default function Progress({ value, variant, label }: ProgressProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize">{label}</label>
      <ProgressBar value={value*10} variant={variant} />
    </div>
  )
}
