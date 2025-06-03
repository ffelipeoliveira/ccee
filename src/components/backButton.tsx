import { RiArrowLeftSLine } from "react-icons/ri";

interface BackButtonProps {
	link: string;
}

function backButton({link = "/login"}: BackButtonProps) {
  return (
	<a 	
		className="backButton"
		href={link}>
		<RiArrowLeftSLine/>
	</a>
  )
}

export default backButton