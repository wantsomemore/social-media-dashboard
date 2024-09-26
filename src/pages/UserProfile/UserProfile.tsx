import React from 'react';
import { useParams } from 'react-router-dom';
import useUserProfile from './hooks/useUserProfile';
import { Container, Tab, Tabs, Box, Typography, Avatar } from '@mui/material';
import TabPanel from '@/components/TabPanel/TabPanel';
import { EUserProfileTab } from '@/enums/EUserProfileTab';
import { FormikProvider } from 'formik';
import EditUserForm from './components/EditUserForm';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
const UserProfile = () => {
  const {
    activeUser: user,
    handleTabChange,
    tabValue,
    formik,
  } = useUserProfile();
  return (
    <Container
      className="lg:p-5 p-3 w-screen bg-light "
      style={{ minHeight: '100vh', maxWidth: '100vw' }}
    >
      <Box className="flex m-auto max-w-sm flex-col 	text-center mb-4">
        <Typography variant="h4" className="text-primary mb-2">
          {user?.username}
        </Typography>
        <Typography className="text-secondary mb-2">
          {user?.followers} followers
        </Typography>
        <Typography className="text-secondary mb-2">
          {user?.likes} likes
        </Typography>
        <Typography className="text-secondary mb-2">
          {user?.comments.length} comments
        </Typography>
        <Typography className="text-secondary mb-2">
          {user?.posts.length} posts
        </Typography>
      </Box>

      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="User Overview" />
        <Tab label="Posts" />
        <Tab label="Comments" />
      </Tabs>

      <TabPanel value={tabValue} index={EUserProfileTab.USER_OVERVIEW}>
        <Box className="flex flex-col justify-start text-center align-start bg-white rounded-lg shadow">
          <FormikProvider value={formik}>
            <EditUserForm />
          </FormikProvider>
        </Box>
      </TabPanel>

      <TabPanel value={tabValue} index={EUserProfileTab.POSTS}>
        <Box className="p-5 text-center bg-white rounded-lg shadow">
          <Typography variant="h5" className="mb-3">
            {user?.posts && user.posts.length > 0 ? 'Posts' : 'No posts yet'}
          </Typography>
          {user?.posts &&
            user.posts.map((post) => (
              <Box
                key={post.id}
                className="flex flex-col justify-start items-start bg-slate-50 mb-4 p-4 border rounded shadow-sm  m-auto "
              >
                <div className="flex  justify-between items-stretch mb-2">
                  <Typography className="text-black">{post.content}</Typography>
                </div>
                <div className="flex flex-col sm:flex-row  gap-2">
                  <div className="flex items-center gap-1">
                    <ThumbUpIcon />
                    {post.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <EqualizerIcon />

                    {post.audienceCoverage}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUpIcon />
                    {post.engagementChangeRate}
                  </div>
                </div>
                <Typography variant="caption" className="text-muted">
                  Posted on: {new Date(post.createdAt).toLocaleDateString()}
                </Typography>
              </Box>
            ))}
        </Box>
      </TabPanel>

      <TabPanel value={tabValue} index={EUserProfileTab.COMMENTS}>
        <Box className="p-5 text-center bg-white rounded-lg shadow">
          <Typography variant="h5" className="mb-3">
            {user?.comments && user.comments.length
              ? 'Comments'
              : 'No comments yet'}
          </Typography>
          {user?.comments &&
            user.comments.map((comment) => (
              <Box
                key={comment.id}
                className="mb-4 p-4 border rounded shadow-sm"
              >
                <div className="flex justify-between items-stretch mb-2">
                  <Typography className="text-black">
                    {comment.content}
                  </Typography>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex items-center gap-1">
                    <ThumbUpIcon />
                    {comment.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <PersonIcon />
                    {comment.username}
                  </div>
                </div>
                <Typography variant="caption" className="flex text-muted">
                  Commented on:{' '}
                  {new Date(comment.createdAt).toLocaleDateString()}
                </Typography>
              </Box>
            ))}
        </Box>
      </TabPanel>
    </Container>
  );
};

export default UserProfile;
