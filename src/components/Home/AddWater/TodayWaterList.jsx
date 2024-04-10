import { useState } from 'react';

import {

  IconButtonFrameTwo,
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

import { useWater } from '../../../hooks/useWater';

export const TodayWaterList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedWaterRecord, setSelectedWaterRecord] = useState(null);
  const { waterRecords } = useWater().waterRecords;

  const handleCrossbarButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenEditModal = (waterRecord) => {
    setSelectedWaterRecord(waterRecord);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleOpenDeleteModal = (waterRecord) => {
    setIsDeleteModalOpen(true);
    setSelectedWaterRecord(waterRecord);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const WaterRecordsListItems = () => {
    if (!waterRecords || waterRecords.length === 0) return;

    return waterRecords.map((waterRecord) => {
      const time = waterRecord.date;
      const localDate = time.toLocaleString();
      const dateStr = localDate;
      const date = new Date(dateStr);
      const hours = date.getUTCHours();
      const minutes = date.getUTCMinutes();
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      const formattedHours = hours < 10 ? '0' + hours : hours;
      // const amOrPm = hours >= 12 ? 'PM' : 'AM';
      return (
        <ListItem key={waterRecord._id}>
          <StyledLeftContainer>
            <Icon>
              <GlassIcon />
            </Icon>
            <StyledDataContainer>
              <StyledWater>{waterRecord.amountWater} ml</StyledWater>
              <StyledTime>
                {formattedHours}:{formattedMinutes}
              </StyledTime>
            </StyledDataContainer>
          </StyledLeftContainer>
          <StyledRightContainer>
       
            <IconButton>
    
              <EditIcon onClick={() => handleOpenEditModal(waterRecord)} />
       
            </IconButton>

            <IconButton>
              <TrashIcon onClick={() => handleOpenDeleteModal(waterRecord)} />
            </IconButton>
          </StyledRightContainer>
        </ListItem>
      );
    });
  };

  const PortionsList = () => {
    return (
      <StyledAddWaterListFrame>
        <StyledListAddWater>{<WaterRecordsListItems />}</StyledListAddWater>
      </StyledAddWaterListFrame>
    );
  };

  return (
    <div>
      <StyledAddWaterListContainer>
        <StyledListHeader>Today</StyledListHeader>
        {/* <StyledAddWaterListFrame> */}
        <PortionsList />
        {/* </StyledAddWaterListFrame> */}
        <StyledAddWaterButton onClick={handleCrossbarButtonClick}>
          <IconButtonFrameTwo>
            <PlusIconSmall />
          </IconButtonFrameTwo>
          <StyledButtonText>Add water</StyledButtonText>
        </StyledAddWaterButton>
      </StyledAddWaterListContainer>
      {isEditModalOpen && (
        <EditWaterModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          recordData={selectedWaterRecord}
        />
      )}
      <CrossbarModal isOpen={isModalOpen} onClose={closeModal} />
      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          recordData={selectedWaterRecord}
        />
      )}
    </div>
  );
};
