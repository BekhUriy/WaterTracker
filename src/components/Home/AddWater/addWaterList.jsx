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
import { useDispatch } from 'react-redux';
import CrossbarModal from '../Crossbar/CrossbarModal';
import { getWaterPortionByIdThunk } from '../../../redux/water/waterThunk';

export const AddWaterList = ({ water }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedWaterRecord, setSelectedWaterRecord] = useState(null);
  const { waterRecords } = water;
  const dispatch = useDispatch();
  console.log(waterRecords);

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
      console.log(waterRecord.date)
      return (
        <ListItem key={waterRecord._id}>
          <StyledLeftContainer>
            <Icon>
              <IconFramTwo>
                <GlassIcon />
              </IconFramTwo>
            </Icon>
            <StyledDataContainer>
              <StyledWater>{waterRecord.amountWater}</StyledWater>
              <StyledTime>{format(waterRecord.date, 'hh:mm') }</StyledTime>
            </StyledDataContainer>
          </StyledLeftContainer>
          <StyledRightContainer>
            <IconButton>
              <EditIcon onClick={()=>handleOpenEditModal(waterRecord)} />
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
      <EditWaterModal isOpen={isEditModalOpen} onClose={closeEditModal} recordData={selectedWaterRecord}/>
      <CrossbarModal isOpen={isModalOpen} onClose={closeModal} />
      <DeleteModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} recordData={selectedWaterRecord}/>
    </div>
  );
};
