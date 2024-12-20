import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import { NewTransactionModal } from "../NewTransactionModal";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../../assets/logoImg.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContent>
    </HeaderContainer>
  );
}
