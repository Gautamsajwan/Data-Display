import { Card } from ".";
import Lottie from 'lottie-react';
import animation1 from '@/lotties/Animation 4.json'

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
    <div className="flex min-h-screen flex-col justify-center items-center">
      <h2 className='font-montserrat font-bold text-xl text-center'>{title}</h2>
      <Lottie animationData={animation1} className="w-1/2" loop={true} />
    </div>
  )
}

export default RenderCards;