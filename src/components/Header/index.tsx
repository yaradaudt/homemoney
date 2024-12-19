import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logoImg.svg'




export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderContent>
                    <img src={logoImg} alt="" />

                    <NewTransactionButton>Nova transação</NewTransactionButton>
                </HeaderContent>
            </HeaderContent>
        </HeaderContainer>            
    )
}