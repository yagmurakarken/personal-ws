import { Button } from "@mantine/core"
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons"
import "./footer.scss"
const Footer = () => {
    return (
        <div className="ya-footer-container">
            <div className="py-3"></div>
            <div className="ya-footer container">
                <div className="row">
                    <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start"><div className="ya-footer-name">
                        Yağmur Akarken
                    </div>
                        <div className="ya-footer-info">
                            Koç University
                        </div>
                        <div className="ya-footer-info">
                            Istanbul, Turkey
                        </div>
                        <div className="py-2"></div>
                    </div>
                    <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-end">

                        <Button leftIcon={<IconMail size={18} />} variant="subtle" color="dark" onClick={() => window.open("mailto:yagmurakarken22@gmail.com", "_blank")} compact>Reach out</Button>

                        <Button leftIcon={<IconBrandGithub size={18} />} variant="subtle" color="dark" onClick={() => window.open("https://github.com/yagmurakarken", "_blank")} compact>GitHub</Button>
                        <Button leftIcon={<IconBrandLinkedin size={18} />} variant="subtle" color="dark" onClick={() => window.open("https://www.linkedin.com/in/yağmur-akarken-009627200/", "_blank")} compact>Linkedin</Button>

                    </div>
                </div>
            </div>
            <div className="py-3"></div>
        </div>
    )
}

export default Footer