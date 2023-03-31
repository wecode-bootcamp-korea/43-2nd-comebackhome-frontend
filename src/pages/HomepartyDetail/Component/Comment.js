import React, { useState, useEffect } from 'react';
import * as S from './CommentStyled.js';
import { ReComment } from './ReComment.js';
import { API } from '../../../config.js';

export const Comment = ({
  item,
  todayDate,
  commentList,
  setCommentList,
  addComment,
  setAddComment,
  myNickname,
  myProfileImage,
  token,
}) => {
  const [showReplyInput, setshowReplyInput] = useState(false);
  const [currentComment, setcurrentComment] = useState('');
  const {
    commentId,
    postId,
    nickname,
    profileImage,
    content,
    date,
    reply_comments,
  } = item;

  const onReplyClick = () => {
    setshowReplyInput(!showReplyInput);
  };

  const enterComment = e => {
    if (e.keyCode === 13) {
      sendComments();
    }
  };

  const sendComments = (event, id) => {
    if (currentComment === '') {
      return;
    }

    const reComment = {
      commentId: commentId,
      replynickname: myNickname,
      replyprofileImage: myProfileImage,
      replyCommentContent: currentComment,
      date: todayDate,
    };

    const updateReply = commentList.map(comment => {
      if (comment.commentId === id) {
        return {
          ...comment,
          reply_comments: [
            ...(comment.reply_comments ? comment.reply_comments : []),
            reComment,
          ],
        };
      } else {
        return comment;
      }
    });

    setCommentList(updateReply);
    setcurrentComment('');
    setshowReplyInput(false);
    setAddComment(addComment => addComment + 1);

    fetch(`${API.reply}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
      body: JSON.stringify({
        commentId: commentId,
        postId: postId,
        contents: currentComment,
      }),
    }).then(response => response.json());
  };

  return (
    <S.CommentWrap>
      <S.CommentUserBox>
        <S.CommentUserPic
          src={profileImage ? profileImage : '/images/frog.png'}
          alt="사용자"
        />
        <div>
          <S.SubTitle bold color>
            {nickname}
          </S.SubTitle>
          <S.SubTitleContents>{content}</S.SubTitleContents>
        </div>
      </S.CommentUserBox>
      <S.CommentUserBox>
        <S.SubTitleDate>{date}</S.SubTitleDate>
        <S.SubTitleDate bold onClick={onReplyClick}>
          댓글 달기
        </S.SubTitleDate>
      </S.CommentUserBox>
      {showReplyInput && (
        <S.ReCommentUserBox>
          <S.CommentUserPic src="/images/frog.png" alt="사용자" />
          <S.Input
            placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
            value={currentComment}
            onChange={e => {
              setcurrentComment(e.target.value);
            }}
            onKeyUp={enterComment}
          />
          <S.CommentBtn onClick={sendComments}>입력</S.CommentBtn>
        </S.ReCommentUserBox>
      )}
      <S.CommentZone>
        {reply_comments &&
          reply_comments.map((item, index) => {
            return (
              <ReComment
                key={index}
                replynickname={item.replynickname}
                replyprofileImage={item.replyprofileImage}
                replyCommentContent={item.replyCommentContent}
                replyCommentDate={item.replyCommentDate}
                date={date}
              />
            );
          })}
      </S.CommentZone>
    </S.CommentWrap>
  );
};
