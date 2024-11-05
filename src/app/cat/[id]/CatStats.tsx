import { Breed } from "@/types/Breed"
import Progress from "./Progress"

interface CatStatsProps {
  breed: Breed
}

export default function CatStats({ breed }: CatStatsProps) {

  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center">
      <div className="flex flex-row gap-10 justify-center w-11/12 md:w-1/2 m-auto md:m-0">
        <div className="w-[inherit] flex flex-col gap-6">
          <Progress value={breed.adaptability} variant="determinate" label="Adaptability" />
          <Progress value={breed.affection_level} variant="determinate" label="Affection level" />
          <Progress value={breed.child_friendly} variant="determinate" label="Child friendly" />
          <Progress value={breed.dog_friendly} variant="determinate" label="Dog friendly" />
          <Progress value={breed.energy_level} variant="determinate" label="Energy level" />
        </div>

        <div className="w-[inherit] flex flex-col gap-6">
          <Progress value={breed.experimental} variant="determinate" label="Experimental" />
          <Progress value={breed.grooming} variant="determinate" label="Grooming" />
          <Progress value={breed.hairless} variant="determinate" label="Hairless" />
          <Progress value={breed.health_issues} variant="determinate" label="Health issues" />
          <Progress value={breed.hypoallergenic} variant="determinate" label="Hypoallergenic" />
        </div>
      </div>

      <div className="flex flex-row gap-10 justify-center w-11/12 md:w-1/2 m-auto md:m-0">
        <div className="w-[inherit] flex flex-col gap-6">
          <Progress value={breed.indoor} variant="determinate" label="Indoor" />
          <Progress value={breed.intelligence} variant="determinate" label="Intelligence" />
          <Progress value={breed.lap} variant="determinate" label="Lap" />
          <Progress value={breed.natural} variant="determinate" label="Natural" />
          <Progress value={breed.rare} variant="determinate" label="Rare" />
          <Progress value={breed.rex} variant="determinate" label="Rex" />
        </div>

        <div className="w-[inherit] flex flex-col gap-6">
          <Progress value={breed.shedding_level} variant="determinate" label="Shedding level" />
          <Progress value={breed.short_legs} variant="determinate" label="Short legs" />
          <Progress value={breed.social_needs} variant="determinate" label="Social needs" />
          <Progress value={breed.stranger_friendly} variant="determinate" label="Stranger friendly" />
          <Progress value={breed.suppressed_tail} variant="determinate" label="Suppressed tail" />
          <Progress value={breed.vocalisation} variant="determinate" label="Vocalisation" />
        </div>
      </div>
    </div>
  )
}