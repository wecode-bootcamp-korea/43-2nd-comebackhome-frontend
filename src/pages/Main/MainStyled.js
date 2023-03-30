import styled from 'styled-components';
import Slider from 'react-slick';

export const SlidePicture = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Carousel = styled.div`
  margin-bottom: 60px;
  width: 100%;
  margin: 0 auto;
`;

export const Room = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 60%;
  margin-right: 10px;
`;

export const Advertise = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 39%;
`;

export const ItemFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 60px;
`;

export const Title = styled.h2`
  font-family: 'EF_jejudoldam';
  font-size: 40px;
  margin: 30px 0 0 0;
  color: #568a35;
`;

export const P = styled.p`
  line-height: 2px;
  font-family: IBMPlexSansKR-Regular;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    color: #568a35;
    transition: 0.3s;
    cursor: pointer;
    font-weight: 900;
  }
  text-align: ${props => (props.right ? 'right' : 'left')};
`;

export const SliderSlide = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: 30px;
  }
  .slick-slider {
    width: 100%;
  }

  .slick-next {
    right: 40px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    opacity: 0.8;
    color: white;
  }
  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 30px;
    color: white;

    li button:before {
      color: white;
    }

    li.slick-active button:before {
      color: white;
    }
  }
`;
