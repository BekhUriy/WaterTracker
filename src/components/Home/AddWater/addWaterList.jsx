import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
import {  Icon, IconButton } from './IconButtons';
import { GlassIcon } from './Icons/GlassIcon';
import { PlusIconSmall } from './Icons/PlusIcon';
import { useState } from 'react';
import{EditWaterModal} from './EditWater'
import { DeleteModal } from './DeleteModal';
import CrossbarModal from '../Crossbar/CrossbarModal';
import { selectWaterRecords } from "../../../redux/water/selectors";
import { getWaterPortionsThunk } from "../../../redux/water/waterThunk";
export const AddWaterList = () => {
   const dispatch = useDispatch();
  //  const [isLargeScreen, setIsLargeScreen] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isEditModalOpen, setIsEditModalOpen] = useState(false)
   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
   const handleCrossbarButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  }
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  }
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
      const {waterRecords, isLoading, error} = useSelector(selectWaterRecords);
  useEffect(()=>{
  dispatch(getWaterPortionsThunk())
  },[])
 
  const WaterRecordsListItems = waterRecords.map((waterRecord) => {
    if (error || !waterRecords || waterRecords.length === 0 ) return
        return (
      <ListItem key={waterRecord.id}>
        <StyledLeftContainer>
          <Icon>
            <IconFramTwo>
              <GlassIcon />
            </IconFramTwo>
          </Icon>
          <StyledDataContainer>
            <StyledWater>{waterRecord.amount}</StyledWater>
            <StyledTime>{waterRecord.time}</StyledTime>
          </StyledDataContainer>
        </StyledLeftContainer>
        <StyledRightContainer>
          <IconButton >
            <EditIcon onClick={handleOpenEditModal} />
          </IconButton>
          <IconButton>
            <TrashIcon onClick={handleOpenDeleteModal} />
          </IconButton>
        </StyledRightContainer>
      </ListItem>
    );
  })
  const PortionsList = () => {
    return (
      // {portions.length>0? portionsListItem :null}
      <StyledListAddWater>
        {error && <b>{error}</b>}
        {WaterRecordsListItems}
      
      </StyledListAddWater>
    );
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
           <StyledButtonText>
        Add water
        </StyledButtonText>
        </StyledAddWaterButton>
       
      </StyledAddWaterListContainer>
      <EditWaterModal isOpen={isEditModalOpen} onClose={closeEditModal} />
      <CrossbarModal isOpen={isModalOpen} onClose={closeModal} />
      <DeleteModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}/>
      </div>

   
  );
};
