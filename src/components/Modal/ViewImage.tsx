import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="2xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.900">
        <ModalBody p={0}>
          <Image
            borderTopRadius={5}
            src={imgUrl}
            alt="Image"
            objectFit="cover"
            w="100%"
            cursor="pointer"
          />
        </ModalBody>
        <ModalFooter justifyContent="start" paddingLeft="4" paddingY="2">
          <Link isExternal href={imgUrl}>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
