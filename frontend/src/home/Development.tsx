import { Image } from "antd"

const Development: React.FC = () => {
    return (
        <div className="development">
            <Image className="development_image" src={`${process.env.publicUrl}img/logo.webp`} preview={false} />
            <p className="development_text">Сайт на обслуживании</p>
        </div>
    )
}

export default Development