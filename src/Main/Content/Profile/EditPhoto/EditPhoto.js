import "./EditPhoto.scss"

function EditPhoto ({editPhoto, userId}) {
  const onPhotoSelected = (evt) => {
    editPhoto(evt.target.files[0])
  }
  return (
    <label className = "edit-photo">
      <input type="file" onChange={onPhotoSelected} accept="image/png, image/jpeg"></input>
    </label>
    
  )
}

export default EditPhoto;