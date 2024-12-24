import React, {useState} from 'react';
import styled from 'styled-components/macro';

const ToggleModalButtonOpen = styled.button`
  display: inline-block;
  margin-left: .5rem;
  margin-right: .5rem;
  padding-left: .2rem;
  padding-right: .2rem;
  font-size: .9rem;
  font-weight: 100;
  cursor: pointer;
  color: grey;
`

const ToggleModalButtonClose = styled.div`
  display: inline-block;
  margin-left: .5rem;
  margin-right: .5rem;
  padding-left: .2rem;
  padding-right: .2rem;
  font-size: .9rem;
  font-weight: 100;
  cursor: pointer;
`

const ModalOverlay = styled.div`
  background: rgba(50, 50, 50, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
`

const ModalContent = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const ModalTitle = styled.div`
  margin: .2rem;
  font-size: 1.2rem;
  font-weight: bolder;
  display: inline-block;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    box-sizing: border-box; /* Ensures padding and borders are included in the width/height */
    resize: none;
`;

function AdminModal() {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <ToggleModalButtonOpen onClick={() => setIsVisible(!isVisible)}>
        [EDIT]
      </ToggleModalButtonOpen>

      {isVisible &&
        <ModalOverlay>
          <ModalWrapper>

            <ModalHeader>
              <ModalTitle>
                Edit Bio Message
              </ModalTitle>
              <ToggleModalButtonClose onClick={() => setIsVisible(!isVisible)}>
                [CLOSE]
              </ToggleModalButtonClose>
            </ModalHeader>

            <ModalContent>
              <TextArea rows={40}>

              </TextArea>
            </ModalContent>
          </ModalWrapper>
        </ModalOverlay>
      }
    </>
  );
}

AdminModal.propTypes = {};

export default AdminModal;
