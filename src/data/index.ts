export interface VideoItem {
  id: number;
  title: string;
  videoUrl: string;
  thumbnail: string;
  description: string;
}

const COMMON_INFO = `
Thông tin khoá học tại: https://m.me/115158751480316?ref=ZIM225764
------------
ANH NGỮ ZIM - Cá nhân hoá học tập
Số 143 phố Hồng Tiến, phường Bồ Đề, Hà Nội
Hotline: 19002833
#ZIM #Tienganhcanhanhoa #OneLearnerOneJourney`;

export const DATA: VideoItem[] = [
  {
    id: 1,
    title: "ZIM Academy - 243-245 Nguyễn Văn Linh, Đà Nẵng",
    videoUrl:
      "https://social-media.zim.vn/stories/81d42d3d-cf18-4400-81d2-8fed056c2b39/QL4hHy-BA%CC%80I%C4%90A%CC%86NG25-12/output/hls/QL4hHy-BA%CC%80I%C4%90A%CC%86NG25-121080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2F81d42d3d-cf18-4400-81d2-8fed056c2b39%2FQL4hHy-BA%25CC%2580I%25C4%2590A%25CC%2586NG25-12%2FQL4hHy-BA%25CC%2580I%25C4%2590A%25CC%2586NG25-12.png&w=1920&q=75",
    description: `Môi trường học tập chuyên nghiệp, cá nhân hóa lộ trình cho từng học viên. ${COMMON_INFO}`,
  },
  {
    id: 2,
    title: "ZIM Academy - IELTS Foundation 3.5-4.5",
    videoUrl:
      "https://social-media.zim.vn/stories/d53f5124-47f5-44b9-a208-4e8368faa698/2tAWPI-1225(2)/output/hls/2tAWPI-1225(2)1080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2F38e4b52d-a8d0-4860-9fb4-2b7a3efcf8a1%2FcoRAm7-Screenshot2025-12-25212326%2FcoRAm7-Screenshot2025-12-25212326.png&w=1920&q=75",
    description: `IELTS không khó nếu bắt đầu đúng. Khóa học giúp xây nền tảng Nghe - Đọc hiểu, Viết đúng cấu trúc và Nói tự tin hơn. ${COMMON_INFO}`,
  },
  {
    id: 3,
    title: "ZIM Academy - 329-331 An Dương Vương, Q.5",
    videoUrl:
      "https://social-media.zim.vn/stories/0eb55b59-06b0-4d34-84b5-4790fb6410b1/KIpwdK-copy_0A5D446E-1501-49C0-BA4C-58DBF3E5D7D7/output/hls/KIpwdK-copy_0A5D446E-1501-49C0-BA4C-58DBF3E5D7D71080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2Fdbb704fe-ccb6-4211-88f1-f302cf905c14%2FSTXRfI-IMG_5627%2FSTXRfI-IMG_5627.jpeg&w=1920&q=75",
    description: `Hệ thống phòng học hiện đại, hỗ trợ học viên tối đa trong suốt hành trình chinh phục mục tiêu. ${COMMON_INFO}`,
  },
  {
    id: 4,
    title: "ZIM Academy - Test Đầu Vào Miễn Phí",
    videoUrl:
      "https://social-media.zim.vn/stories/5738404f-551d-48a8-a030-9b8bbcce5c00/bLlZB1-copy_6939756F-084F-4F59-A2B5-AF7223FA1781/output/hls/bLlZB1-copy_6939756F-084F-4F59-A2B5-AF7223FA17811080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2F3cf87d97-b3c4-4e8f-87f0-5ca22eedcf49%2Fgy1sfq-IMG_3278%2Fgy1sfq-IMG_3278.jpg&w=1920&q=75",
    description: `Xác định chính xác trình độ hiện tại để có lộ trình ôn luyện bài bản nhất. Đăng ký ngay hôm nay. ${COMMON_INFO}`,
  },
  {
    id: 6,
    title: "ZIM Academy - Định Hướng Học Tập",
    videoUrl:
      "https://social-media.zim.vn/stories/43831335-cfe3-43e9-a579-68196fd9e6e3/H9hY2s-copy_7164851B-0552-479B-9ACC-463DF80EE64E/output/hls/H9hY2s-copy_7164851B-0552-479B-9ACC-463DF80EE64E1080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2Fd79eaf17-a87b-438e-865e-87fd25291866%2FRfLiW3-IMG_7602%2FRfLiW3-IMG_7602.PNG&w=1920&q=75",
    description: `Mọi thắc mắc về khóa học và lộ trình học tập, quý học viên vui lòng liên hệ để được tư vấn chi tiết nhất. ${COMMON_INFO}`,
  },
  {
    id: 4,
    title: "ZIM Academy - Cá Nhân Hóa Học Tập",
    videoUrl:
      "https://social-media.zim.vn/stories/567c7340-9753-4881-980f-500b418b8d91/VR7TAK-copy_32178721-FB55-4014-B509-D819B0373D4C/output/hls/VR7TAK-copy_32178721-FB55-4014-B509-D819B0373D4C1080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2F644a7e4b-7293-4bd0-ab40-c0bdc95fc39e%2FfQDzAn-IMG_1355%2FfQDzAn-IMG_1355.jpeg&w=1920&q=75",
    description: `One Learner - One Journey. ZIM cam kết mang đến trải nghiệm học tập tối ưu, bám sát năng lực của từng cá nhân. ${COMMON_INFO}`,
  },

  {
    id: 5,
    title: "ZIM Academy - IELTS Foundation 3.5-4.5",
    videoUrl:
      "https://social-media.zim.vn/stories/d53f5124-47f5-44b9-a208-4e8368faa698/2tAWPI-1225(2)/output/hls/2tAWPI-1225(2)1080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2F38e4b52d-a8d0-4860-9fb4-2b7a3efcf8a1%2FcoRAm7-Screenshot2025-12-25212326%2FcoRAm7-Screenshot2025-12-25212326.png&w=1920&q=75",
    description: `IELTS không khó nếu bắt đầu đúng. Khóa học giúp xây nền tảng Nghe - Đọc hiểu, Viết đúng cấu trúc và Nói tự tin hơn. ${COMMON_INFO}`,
  },
  {
    id: 6,
    title: "ZIM Academy - 329-331 An Dương Vương, Q.5",
    videoUrl:
      "https://social-media.zim.vn/stories/0eb55b59-06b0-4d34-84b5-4790fb6410b1/KIpwdK-copy_0A5D446E-1501-49C0-BA4C-58DBF3E5D7D7/output/hls/KIpwdK-copy_0A5D446E-1501-49C0-BA4C-58DBF3E5D7D71080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2Fdbb704fe-ccb6-4211-88f1-f302cf905c14%2FSTXRfI-IMG_5627%2FSTXRfI-IMG_5627.jpeg&w=1920&q=75",
    description: `Hệ thống phòng học hiện đại, hỗ trợ học viên tối đa trong suốt hành trình chinh phục mục tiêu. ${COMMON_INFO}`,
  },

  {
    id: 7,
    title: "ZIM Academy - Môi Trường Năng Động",
    videoUrl:
      "https://social-media.zim.vn/stories/43f1eea4-8980-4bc6-a6a9-10cff5b920e7/e2QJA4-IMG_2169/output/hls/e2QJA4-IMG_21691080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2F4cce8fcf-b586-40e9-a150-38c880775c24%2FK53mxW-58A4005C-02D7-46AA-ABF8-A45851850275%2FK53mxW-58A4005C-02D7-46AA-ABF8-A45851850275.jpeg&w=1920&q=75",
    description: `Nơi từng tiết học đều được thiết kế chỉn chu, giúp học viên luôn tràn đầy năng lượng khi đến lớp. ${COMMON_INFO}`,
  },
  {
    id: 8,
    title: "ZIM Academy - Một Ngày Trọn Vẹn",
    videoUrl:
      "https://social-media.zim.vn/stories/608b797f-489d-4adb-b136-eba0b899d54e/E9H7wA-Video/output/hls/E9H7wA-Video1080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2F252318c5-db88-4e49-8510-da6317675532%2FK_9cEm-thumbnail-2%2FK_9cEm-thumbnail-2.png&w=1920&q=75",
    description: `Học hiệu quả không phải là học nhiều, mà là học đúng cách, có định hướng và đồng hành cùng thầy cô tận tâm. ${COMMON_INFO}`,
  },
  {
    id: 9,
    title: "ZIM Academy - Chinh Phục IELTS",
    videoUrl:
      "https://social-media.zim.vn/stories/102d7924-fdb1-4e61-ace2-eb0809344de9/Qdp1P5-copy_39538B4B-B3F9-45AE-AA31-593EA819AF8E/output/hls/Qdp1P5-copy_39538B4B-B3F9-45AE-AA31-593EA819AF8E1080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2Fdb562a25-4486-4a90-aabb-e930ab405611%2FmIIJU0-thumbnail-0%2FmIIJU0-thumbnail-0.png&w=1920&q=75",
    description: `Đội ngũ giảng viên tại ZIM luôn sẵn sàng hỗ trợ và sát cánh cùng bạn trên con đường đạt mục tiêu. ${COMMON_INFO}`,
  },
  {
    id: 10,
    title: "ZIM Academy - Văn Hóa Học Tập",
    videoUrl:
      "https://social-media.zim.vn/stories/934720ab-e9f1-4bb5-8dec-e233bec27747/NWXCeP-copy_B45ED6F8-91A6-4C82-A32B-1A264F454776/output/hls/NWXCeP-copy_B45ED6F8-91A6-4C82-A32B-1A264F4547761080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2F53ba17d4-9037-45fc-9e38-24f244adfa8c%2F4XlKun-IMG_1405%2F4XlKun-IMG_1405.jpeg&w=1920&q=75",
    description: `Gắn kết, chia sẻ và cùng nhau tiến bộ. ZIM không chỉ là nơi học tập mà còn là cộng đồng tri thức. ${COMMON_INFO}`,
  },
];
