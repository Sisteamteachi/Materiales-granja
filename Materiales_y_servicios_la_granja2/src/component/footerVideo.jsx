


const FooterVideo = ({video,message,info}) =>{
    return (
        <>
            <div className="fr-container-video_colum1">
                    <video src={video} alt={info}  autoPlay  loop  muted/>
            </div>
            <div className="fr-container-video_colum2">
                <p className="text-center">{message}</p>
            </div>
        </>


    )
}

export default FooterVideo