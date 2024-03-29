import { Radio } from "@material-tailwind/react";
import SliderComponent from "./SliderComponent";
 
export default function Filter() {
  return (
    <div className="flex-row">
      Filter by:
      <div className='space-x-4'>
        <Radio name="type" label="Room Type" />
        <Radio name="type" label="Bedroom Count"/>
      </div>
      <div>
        Max Price:
        <SliderComponent />
      </div>
    </div>
  );
}