import React from 'react'
import UserProfile from '../homepages/UserPofile/UserProfile'
import Links from '../../components/Links/Links'

const AdminProfile = () => {
  return (
    <>
      <UserProfile
      userdata={
        <></>
      }

      userRole={
        <>
<Links
linkUrl='/unapprovedHouses'
>
Unapproved Houses
</Links>



<Links
linkUrl='ioe2'
>
Logout
</Links>
<Links
linkUrl='ioe2'
>
Change Password
</Links>
        </>
      }
      
      />
    </>
  )
}

export default AdminProfile
