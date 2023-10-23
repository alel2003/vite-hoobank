import styles from "../../style"
function HorizontalCard({icon, title ,text}) {
  return (
    <div className='w-full flex justify-between items-center p-[20px] gap-x-[20px] rounded-[20px] feature-card cursor-pointer'>
        <div className={`rounded-full bg-dimBlue w-[70px] h-[50px] ${styles.flexCenter}`}>
            <img className="w-[50%] h-[50%] object-"
            src={icon} 
            alt={title} />
        </div>

        <div className="flex flex-col">
        <h5 className='font-poppins text-[18px] 
        font-semibold text-white mb-[8px]'>
            {title}
        </h5>
        <p className='font-poppins text-[16px] font-normal text-dimWhite'>
            {text}
        </p>
        </div>
    </div>
  )
}

export default HorizontalCard