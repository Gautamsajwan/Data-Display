import { Card } from ".";
import Lottie from 'lottie-react';
import animation1 from '../lotties/Animation 4.json'

type UserDetails = {
    name: string,
    description: string,
    jobsApplied: number,
    likes: number,
}

type Props = {
  data: UserDetails[];
  title: string;
};

function RenderCards({ data, title }: Props) {
  if(data?.length > 0) {
    return data.map((data, index) => <Card key={index} {...data} />)
  }
  return (
    <div className="mt-10 flex flex-col justify-start items-center">
      <h2 className='font-spacemono font-bold text-2xl text-center drop-shadow-xl'>{title}</h2>
      <Lottie animationData={animation1} className="w-[400px] filter contrast-125" loop={true} />
    </div>
  )
}

export default RenderCards;