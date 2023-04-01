import React from 'react';
import * as S from './ReCommentStyled.js';

export const ReComment = ({
  replynickname,
  replyprofileImage,
  replyCommentContent,
  date,
}) => {
  return (
    <div>
      <S.ReComment>
        <S.CommentUserBox>
          <S.CommentUserPic
            src={replyprofileImage ? replyprofileImage : '/images/frog.png'}
            alt="사용자"
          />
          <div>
            <S.SubTitle bold color>
              {replynickname}
            </S.SubTitle>
            <S.SubTitleContents>{replyCommentContent}</S.SubTitleContents>
          </div>
        </S.CommentUserBox>
        <S.CommentUserBox>
          <S.SubTitleDate>{date}</S.SubTitleDate>
          <S.SubTitleDate bold />
        </S.CommentUserBox>
      </S.ReComment>
    </div>
  );
};
