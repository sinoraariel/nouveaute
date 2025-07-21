import cloudinary 
import cloudinary.uploader

cloudinary.config(
    cloud_name="dwateogqu",
    api_key="242384279231587",
    api_secret="Ztk3y0plHFys8FN6zjzZ45NMWwk"
)

cloudinary.uploader.upload("C:/Users/NIMBUZ STORE/Desktop/EnmKit/enmkit_site_vitrine2/src/pages/images/ORANGE.png", public_id="image_orange")
url1= cloudinary.CloudinaryImage('image_orange').build_url()
print(url1)