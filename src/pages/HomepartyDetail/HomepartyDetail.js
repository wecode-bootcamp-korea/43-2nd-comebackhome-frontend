import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Comment } from './Component/Comment.js';
import * as S from './HomepartyDetailStyled.js';
import ImageMarker from 'react-image-marker';
import { API } from '../../config.js';

const HomepartyDetail = () => {
  const [shoppingItem, setShoppingItem] = useState([]);
  const [loadging, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [getproductId, setgetproductId] = useState(0);
  const [commentList, setCommentList] = useState([]);
  const [currentComment, setcurrentComment] = useState('');
  const [addComment, setAddComment] = useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const token = localStorage.getItem('token');
  const myNickname = localStorage.getItem('nickname');
  const myProfileImage = localStorage.getItem('profileImage');
  const markers = shoppingItem.productInfo;

  const CustomMarker = markers => {
    const { productsId, productUrl, productName, productPrice } = markers;

    if (getproductId && show) {
      return (
        <>
          {getproductId === productsId && <S.MarkerButton>+</S.MarkerButton>}
          {getproductId === productsId && (
            <S.ProductInfoWrap dispaly>
              <S.ProductImg src={productUrl} alt="제품사진" />
              <S.ProductWrap>
                <S.Text>{productName}</S.Text>
                <S.Text>{productPrice.toLocaleString()}원</S.Text>
              </S.ProductWrap>
            </S.ProductInfoWrap>
          )}
        </>
      );
    }

    return (
      <>
        <S.MarkerButton
          onMouseOver={() => {
            setgetproductId(productsId);
          }}
          onMouseLeave={() => {
            setgetproductId(0);
          }}
          onClick={() => navigate(`/productdetail/${productsId}`)}
        >
          +
        </S.MarkerButton>

        {getproductId === productsId && (
          <S.ProductInfoWrap dispaly>
            <S.ProductImg src={productUrl} alt="제품 사진" />
            <S.ProductWrap>
              <S.Text>{productName}</S.Text>
              <S.Text>{productPrice.toLocaleString()}원</S.Text>
            </S.ProductWrap>
          </S.ProductInfoWrap>
        )}
      </>
    );
  };

  let today = new Date();
  let time = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
  };
  const todayDate = `${time.year}-${time.month}-${time.date}`;

  const enterComment = e => {
    if (e.keyCode === 13 && token) {
      sendComments();
    }
  };

  const sendComments = event => {
    if (token) {
      if (currentComment === '') {
        return;
      }
      const newComment = {
        postId: params.id,
        nickname: myNickname,
        profileImage: myProfileImage,
        content: currentComment,
        reply_comments: [],
        date: todayDate,
      };

      setCommentList([newComment, ...commentList]);
      setcurrentComment('');
      setAddComment(addComment => addComment + 1);

      fetch(`${API.comment}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: token,
        },
        body: JSON.stringify({
          contents: currentComment,
          postId: params.id,
        }),
      }).then(response => response.json());
    }
  };

  useEffect(() => {
    fetch(`${API.homepartylist}/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setShoppingItem(data.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`${API.getComment}/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setCommentList(data.comments.reverse());
        if (data.comments[0].postingCount) {
          setAddComment(Number(data.comments[0].postingCount));
        } else {
          setAddComment(0);
        }
      });
  }, [addComment]);

  if (loadging) return <S.WidthMe>loadging</S.WidthMe>;

  return (
    <S.WidthMe>
      <S.SubTitle bold>온라인 집들이</S.SubTitle>
      <S.Title>{shoppingItem.title}</S.Title>
      <S.UserDetail>
        <S.UserInfo>
          <S.UserImg
            src={
              shoppingItem.social_profile_image
                ? shoppingItem.social_profile_image
                : '/images/frog.png'
            }
            alt="사용자프로필사진"
          />
          <S.SubTitle bold>{shoppingItem.social_nickname}</S.SubTitle>
        </S.UserInfo>
        <S.Button>+팔로우</S.Button>
      </S.UserDetail>
      <S.BacgroundAptSize>
        <S.AptSize>
          <S.IconFlex>
            <S.ImgIcon src="/images/shoppingItem/apt.png" />
            <S.SubTitle bold>아파트</S.SubTitle>
          </S.IconFlex>
          <S.IconFlex>
            <S.ImgIcon src="/images/shoppingItem/blueprint.png" />
            <S.SubTitle bold>{shoppingItem.roomSize}</S.SubTitle>
          </S.IconFlex>
        </S.AptSize>
      </S.BacgroundAptSize>
      <S.Img src={shoppingItem.images[1]} />
      <S.Contents>{shoppingItem.description}</S.Contents>
      <S.ImgIcon src="/images/sale.png" />
      <S.ColorSpan>3초컷 집들이 미리보기</S.ColorSpan>
      <S.ImageMarkerWrap show={show}>
        <ImageMarker
          src={shoppingItem.images[0]}
          markers={markers}
          markerComponent={CustomMarker}
        />
      </S.ImageMarkerWrap>
      <S.ProductListing>
        {shoppingItem.productInfo.map(({ productsId, productUrl }) => (
          <S.ShoppingListMap
            key={productsId}
            id={productsId}
            src={productUrl}
            onClick={() => navigate(`/productdetail/${productsId}`)}
            onMouseMove={() => {
              setShow(true);
              setgetproductId(productsId);
            }}
            onMouseLeave={() => {
              setShow(false);
              setgetproductId(0);
            }}
          />
        ))}
      </S.ProductListing>
      <S.Written>
        <S.UserInfo>
          <S.UserImg
            src={
              shoppingItem.social_profile_image
                ? shoppingItem.social_profile_image
                : '/images/frog.png'
            }
            alt="사용자프로필사진"
          />
          <S.SubTitle bold>{shoppingItem.social_nickname}</S.SubTitle>
        </S.UserInfo>
      </S.Written>
      <S.Comment>댓글&nbsp;</S.Comment>
      <S.Comment color>{addComment}</S.Comment>
      <S.CommentUserBox>
        <S.CommentUserPic src="/images/frog.png" alt="사용자" />
        {token ? (
          <S.Input
            placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
            value={currentComment}
            onChange={e => {
              setcurrentComment(e.target.value);
            }}
            onKeyUp={enterComment}
          />
        ) : (
          <S.Input placeholder="로그인을 해주세요 :)" />
        )}
        <S.CommentBtn onClick={sendComments}>입력</S.CommentBtn>
      </S.CommentUserBox>
      <S.CommentZone>
        {commentList &&
          commentList.map((item, index) => {
            return (
              <Comment
                key={index}
                item={item}
                todayDate={todayDate}
                commentList={commentList}
                setCommentList={setCommentList}
                addComment={addComment}
                setAddComment={setAddComment}
                myNickname={myNickname}
                myProfileImage={myProfileImage}
                token={token}
              />
            );
          })}
      </S.CommentZone>
    </S.WidthMe>
  );
};

export default HomepartyDetail;
