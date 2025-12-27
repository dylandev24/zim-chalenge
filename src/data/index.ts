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
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2F38e4b52d-a8d0-4860-9fb4-2b7a3efcf8a1%2FcoRAm7-Screenshot2025-12-25212326%2FcoRAm7-Screenshot2025-12-25212326.png&w=640&q=50",
    description: `Môi trường học tập chuyên nghiệp, cá nhân hóa lộ trình cho từng học viên. ${COMMON_INFO}`,
  },
  {
    id: 2,
    title: "ZIM Academy - IELTS Foundation 3.5-4.5",
    videoUrl:
      "https://social-media.zim.vn/stories/d53f5124-47f5-44b9-a208-4e8368faa698/2tAWPI-1225(2)/output/hls/2tAWPI-1225(2)1080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2F38e4b52d-a8d0-4860-9fb4-2b7a3efcf8a1%2FcoRAm7-Screenshot2025-12-25212326%2FcoRAm7-Screenshot2025-12-25212326.png&w=640&q=50",
    description: `IELTS không khó nếu bắt đầu đúng. Khóa học giúp xây nền tảng Nghe - Đọc hiểu. ${COMMON_INFO}`,
  },
  {
    id: 3,
    title: "ZIM Academy - 329-331 An Dương Vương, Q.5",
    videoUrl:
      "https://social-media.zim.vn/stories/0eb55b59-06b0-4d34-84b5-4790fb6410b1/KIpwdK-copy_0A5D446E-1501-49C0-BA4C-58DBF3E5D7D7/output/hls/KIpwdK-copy_0A5D446E-1501-49C0-BA4C-58DBF3E5D7D71080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2Fdbb704fe-ccb6-4211-88f1-f302cf905c14%2FSTXRfI-IMG_5627%2FSTXRfI-IMG_5627.jpeg&w=640&q=50",
    description: `Hệ thống phòng học hiện đại, hỗ trợ học viên tối đa chinh phục mục tiêu. ${COMMON_INFO}`,
  },
  {
    id: 4,
    title: "ZIM Academy - Test Đầu Vào Miễn Phí",
    videoUrl:
      "https://social-media.zim.vn/stories/5738404f-551d-48a8-a030-9b8bbcce5c00/bLlZB1-copy_6939756F-084F-4F59-A2B5-AF7223FA1781/output/hls/bLlZB1-copy_6939756F-084F-4F59-A2B5-AF7223FA17811080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2F3cf87d97-b3c4-4e8f-87f0-5ca22eedcf49%2Fgy1sfq-IMG_3278%2Fgy1sfq-IMG_3278.jpg&w=640&q=50",
    description: `Xác định chính xác trình độ hiện tại để có lộ trình ôn luyện bài bản nhất. ${COMMON_INFO}`,
  },
  {
    id: 5,
    title: "ZIM Academy - Định Hướng Học Tập",
    videoUrl:
      "https://social-media.zim.vn/stories/43831335-cfe3-43e9-a579-68196fd9e6e3/H9hY2s-copy_7164851B-0552-479B-9ACC-463DF80EE64E/output/hls/H9hY2s-copy_7164851B-0552-479B-9ACC-463DF80EE64E1080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2Fd79eaf17-a87b-438e-865e-87fd25291866%2FRfLiW3-IMG_7602%2FRfLiW3-IMG_7602.PNG&w=640&q=50",
    description: `Mọi thắc mắc về khóa học, quý học viên vui lòng liên hệ để được tư vấn. ${COMMON_INFO}`,
  },
  {
    id: 6,
    title: "ZIM Academy - Môi Trường Năng Động",
    videoUrl:
      "https://social-media.zim.vn/stories/43f1eea4-8980-4bc6-a6a9-10cff5b920e7/e2QJA4-IMG_2169/output/hls/e2QJA4-IMG_21691080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2F4cce8fcf-b586-40e9-a150-38c880775c24%2FK53mxW-58A4005C-02D7-46AA-ABF8-A45851850275%2FK53mxW-58A4005C-02D7-46AA-ABF8-A45851850275.jpeg&w=640&q=50",
    description: `Nơi từng tiết học đều giúp học viên luôn tràn đầy năng lượng khi đến lớp. ${COMMON_INFO}`,
  },
  {
    id: 7,
    title: "ZIM Academy - Chinh Phục IELTS",
    videoUrl:
      "https://social-media.zim.vn/stories/102d7924-fdb1-4e61-ace2-eb0809344de9/Qdp1P5-copy_39538B4B-B3F9-45AE-AA31-593EA819AF8E/output/hls/Qdp1P5-copy_39538B4B-B3F9-45AE-AA31-593EA819AF8E1080p.m3u8",
    thumbnail:
      "https://zim.vn/_next/image?url=https%3A%2F%2Fsocial-media.zim.vn%2Fstories%2Fdb562a25-4486-4a90-aabb-e930ab405611%2FmIIJU0-thumbnail-0%2FmIIJU0-thumbnail-0.png&w=640&q=50",
    description: `Đội ngũ giảng viên tại ZIM luôn sẵn sàng hỗ trợ bạn trên con đường đạt mục tiêu. ${COMMON_INFO}`,
  },
];
