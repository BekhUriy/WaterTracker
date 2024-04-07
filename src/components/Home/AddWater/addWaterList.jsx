import { useState } from 'react';
import { format } from 'date-fns';

import {
  IconButtonFrameTwo,
  IconFramTwo,
  ListItem,
  StyledAddWaterButton,
  StyledAddWaterListContainer,
  StyledAddWaterListFrame,
  StyledButtonText,
  StyledDataContainer,
  StyledLeftContainer,
  StyledListAddWater,
  StyledListHeader,
  StyledRightContainer,
  StyledTime,
  StyledWater,
} from './StyledaddWaterList';
import EditIcon from './Icons/EditIcon';
import TrashIcon from './Icons/TrashIcon';
import { Icon, IconButton } from './IconButtons';
import { GlassIcon } from './Icons/GlassIcon';
import { PlusIconSmall } from './Icons/PlusIcon';
import { EditWaterModal } from './EditWater';
import { DeleteModal } from './DeleteModal';
import CrossbarModal from '../Crossbar/CrossbarModal';

export const AddWaterList = ({ water }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { waterRecords } = water;

  console.log(waterRecords);

  const handleCrossbarButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const WaterRecordsListItems = () => {
    if (!waterRecords || waterRecords.length === 0) return;

    return waterRecords.map((waterRecord) => {
      return (
        <ListItem key={waterRecord.id}>
          <StyledLeftContainer>
            <Icon>
              <IconFramTwo>
                <GlassIcon />
              </IconFramTwo>
            </Icon>
            <StyledDataContainer>
              <StyledWater>{waterRecord.amountWater}</StyledWater>
              <StyledTime>{waterRecord.date}</StyledTime>
            </StyledDataContainer>
          </StyledLeftContainer>
          <StyledRightContainer>
            <IconButton>
              <EditIcon onClick={handleOpenEditModal} />
            </IconButton>
            <IconButton>
              <TrashIcon onClick={handleOpenDeleteModal} />
            </IconButton>
          </StyledRightContainer>
        </ListItem>
      );
    });
  };

  const WaterRecordsListItemsDraft = () => {
    return (
      <ListItem>
        <StyledLeftContainer>
          <Icon>
            <IconFramTwo>
              <GlassIcon />
            </IconFramTwo>
          </Icon>
          <StyledDataContainer>
            <StyledWater>200ml</StyledWater>
            <StyledTime>11:00 AM</StyledTime>
          </StyledDataContainer>
        </StyledLeftContainer>
        <StyledRightContainer>
          <IconButton>
            <EditIcon onClick={handleOpenEditModal} />
          </IconButton>
          <IconButton>
            <TrashIcon onClick={handleOpenDeleteModal} />
          </IconButton>
        </StyledRightContainer>
      </ListItem>
    );
  };

  const PortionsList = () => {
    return <StyledListAddWater>{<WaterRecordsListItems />}</StyledListAddWater>;
  };

  return (
    <div>
      <StyledAddWaterListContainer>
        <StyledListHeader>Today</StyledListHeader>
        <StyledAddWaterListFrame>
          <PortionsList />
        </StyledAddWaterListFrame>
        <StyledAddWaterButton onClick={handleCrossbarButtonClick}>
          <IconButtonFrameTwo>
            <PlusIconSmall />
          </IconButtonFrameTwo>
          <StyledButtonText>Add water</StyledButtonText>
        </StyledAddWaterButton>
      </StyledAddWaterListContainer>
      <EditWaterModal isOpen={isEditModalOpen} onClose={closeEditModal} />
      <CrossbarModal isOpen={isModalOpen} onClose={closeModal} />
      <DeleteModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} />
    </div>
  );
};
