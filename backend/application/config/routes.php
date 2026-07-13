<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/userguide3/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'Admin';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;



// Routes for Admin Authentication
$route['api/admin/login'] = 'admin/login';

// Routes for Admin Dashboard
$route['api/admin/get-stats'] = 'admin/get_stats';
$route['api/admin/update-stats'] = 'admin/update_stats';
$route['api/admin/get-recent-donations'] = 'admin/get_recent_donations';
$route['api/admin/get-recent-katha-bookings'] = 'admin/get_recent_katha_bookings';

// Routes for Admin Profile
$route['api/admin/profile'] = 'admin/profile';
$route['api/admin/profile/update'] = 'admin/profile/update';

// Routes for Admin Change Password
$route['api/admin/change-password'] = 'admin/adminChangePassword';

// Routes for Blogs
$route['api/admin/blogs'] = 'admin/blogs';
$route['api/admin/blogs/new'] = 'admin/uploadNewBlog';
$route['api/admin/blogs/update'] = 'admin/updateBlog';
$route['api/admin/blogs/delete'] = 'admin/deleteBlog';

// Routes for Katha Bookings
$route['api/admin/katha-booking'] = 'admin/kathaBookingsDetials';
$route['api/admin/katha-types'] = 'admin/fetchKathaTypes';
$route['api/admin/add-new-katha-type'] = 'admin/addNewKathaType';
$route['api/admin/upload-poster'] = 'admin/uploadPoster';
$route['api/admin/delete-poster'] = 'admin/deletePoster';
$route['api/admin/posters'] = 'admin/getPosters';

// Routes for GauSeva
$route['api/admin/add-shankalp'] = 'admin/addShankalpForGuaSeva';
$route['api/admin/shankalp-plans'] = 'admin/shankalpPlansList';
$route['api/admin/gau-seva-donars'] = 'admin/gauSevaDonarsList';

// Routes for Contact Queries
$route['api/admin/user-contact-details'] = 'admin/contactQueriesList';
$route['api/admin/delete-query'] = 'admin/deleteContactQuery';
$route['api/admin/update-query-status'] = 'admin/updateContactQueryStatus';

// Routes for Braj Darshan
$route['api/admin/braj-darshan-places'] = 'admin/brajDarshanPlaces';
$route['api/admin/braj-darshan-places/add'] = 'admin/addBrajDarshanPlace';
$route['api/admin/braj-darshan-places/edit'] = 'admin/editBrajDarshanPlace';
$route['api/admin/braj-darshan-enquiries'] = 'admin/brajdarshan_enquiries';
$route['api/admin/braj-darshan-enquiries/update'] = 'admin/update_brajdarshan_enquiry_status';

// Routes for Temple
$route['api/admin/core-motos'] = 'admin/getAllCoreMotos';
$route['api/admin/temple-methodology'] = 'admin/getTempleMethodology';
$route['api/admin/temple-donations'] = 'admin/getTempleDonations';
$route['api/admin/core-motos/add'] = 'admin/addCoreMoto';
$route['api/admin/core-motos/edit'] = 'admin/editCoreMoto';
$route['api/admin/core-motos/delete'] = 'admin/deleteCoreMoto';
$route['api/admin/temple-methodology/add'] = 'admin/addTempleMethodology';
$route['api/admin/temple-methodology/edit'] = 'admin/editTempleMethodology';
$route['api/admin/temple-methodology/delete'] = 'admin/deleteTempleMethodology';
$route['api/admin/temple-donations/add'] = 'admin/addTempleDonation';
$route['api/admin/temple-donations/edit'] = 'admin/editTempleDonation';
$route['api/admin/temple-donations/delete'] = 'admin/deleteTempleDonationDetail';

// Routes for Testimonials
$route['api/admin/get-user-reviews'] = 'admin/getUserReviews';
$route['api/admin/update-review-status'] = 'admin/updateReviewStatus';
$route['api/admin/update-review-visibility'] = 'admin/updateReviewVisibility';
$route['api/admin/delete-review'] = 'admin/deleteReview';

// Routes for Gallery
$route['api/admin/upload-gallery-images'] = 'admin/upload_gallery_images';
$route['api/admin/fetch_gallery'] = 'admin/fetch_gallery';
$route['api/admin/delete-gallery-image'] = 'admin/delete_gallery_image';

// Routes for Subscriptions
$route['api/admin/get-subscription'] = 'admin/getSubscriptions';
$route['api/admin/add-new-subscription'] = 'admin/addNewSubscription';
$route['api/admin/update-subscription/(:num)'] = 'admin/updateSubscription/$1';
$route['api/admin/delete-subscription/(:num)'] = 'admin/deleteSubscription/$1';

// Routes for Banners
$route['api/admin/fetch-banners'] = 'admin/getBanners';
$route['api/admin/add-new-banner'] = 'admin/addNewBanner';
$route['api/admin/update-banner/(:num)'] = 'admin/updateBanner/$1';
$route['api/admin/delete-banner/(:num)'] = 'admin/deleteBanner/$1';

// *************************** User Routes ***************************///////////////////////////////

// Routes for User Contact Query
$route['api/user/contact-query'] = 'user/contactQuery';

// Routes for User Home Page
$route['api/user/get-reviews'] = 'user/get_reviews';
$route['api/user/send-new-review'] = 'user/add_new_review';
$route['api/user/get-blogs'] = 'user/get_blogs';
$route['api/user/like-blog'] = 'user/like_blog';
$route['api/user/fetch-membership-plans'] = 'user/fetchMemberShipPlans';

// Routes For User Katha Booking Page
$route['api/user/fetch-katha-types'] = 'user/fetchkathaTypes';
$route['api/user/katha-booking'] = 'user/kathaBooking';
$route['api/user/fetch-upcoming-katha-posters'] = 'user/upcomingKathaPosters';


// Routes for GauSeva Page
$route['api/user/fetch-shankalp-plans'] = 'user/fetchShankalpPlans';
$route['api/user/gau-seva-donation'] = 'user/gauSevaDonation';

// Routes For Braj Darshan Page
$route['api/user/fetch-brajdarshan-places'] = 'user/getBrajDarshanPlaces';

// Route for Temple Page
$route['api/user/fetch-core-motos'] = 'user/fetchCoreMotos';

// Route for Join Membership
$route['api/user/join-membership'] = 'user/joinMembership';

// Route for Donate
$route['api/user/join-as-volenteer'] = 'user/joinAsVolenteer';

// Route for Bannes 
$route['api/user/fetch-banners'] = 'user/fetchBanners';

// Route for payment link generate
$route['api/user/create-donate-payment'] = 'user/createDonatePaymentLink';