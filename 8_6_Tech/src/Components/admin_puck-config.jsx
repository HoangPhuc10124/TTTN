import AdminHeading from "./admin-heading.jsx";
import AdminText from "./admin-text.jsx";
import AdminImage from "./admin-image.jsx";
import AdminSection from "./admin-section.jsx";
import AdminHero from "./admin-hero.jsx";

export const puckConfig = {
  components: {
    Heading: {
      label: "Tiêu đề",

      fields: {
        content: {
          type: "text",
          label: "Nội dung"
        },

        level: {
          type: "select",
          label: "Cấp độ",
          options: [
            { label: "H1", value: 1 },
            { label: "H2", value: 2 },
            { label: "H3", value: 3 },
            { label: "H4", value: 4 },
            { label: "H5", value: 5 },
            { label: "H6", value: 6 }
          ]
        },

        align: {
          type: "select",
          label: "Căn lề",
          options: [
            { label: "Trái", value: "left" },
            { label: "Giữa", value: "center" },
            { label: "Phải", value: "right" }
          ]
        }
      },

      defaultProps: {
        content: "Tiêu đề",
        level: 2,
        align: "left"
      },

      render: (props) => <AdminHeading {...props} />
    },

    Text: {
      label: "Văn bản",

      fields: {
        content: {
          type: "textarea",
          label: "Nội dung"
        },

        align: {
          type: "select",
          label: "Căn lề",
          options: [
            { label: "Trái", value: "left" },
            { label: "Giữa", value: "center" },
            { label: "Phải", value: "right" },
            { label: "Đều", value: "justify" }
          ]
        },

        color: {
          type: "text",
          label: "Màu chữ"
        },

        fontSize: {
          type: "number",
          label: "Cỡ chữ"
        },

        fontWeight: {
          type: "select",
          label: "Độ đậm",
          options: [
            { label: "400", value: "400" },
            { label: "500", value: "500" },
            { label: "600", value: "600" },
            { label: "700", value: "700" }
          ]
        },

        lineHeight: {
          type: "number",
          label: "Line Height"
        },

        marginBottom: {
          type: "number",
          label: "Margin Bottom"
        }
      },

      defaultProps: {
        content: "Nhập văn bản...",
        align: "left",
        color: "#374151",
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 1.6,
        marginBottom: 16
      },

      render: (props) => <AdminText {...props} />
    },

    Image: {
      label: "Ảnh",

      fields: {
        src: {
          type: "text",
          label: "URL ảnh"
        },

        alt: {
          type: "text",
          label: "Alt"
        },

        width: {
          type: "text",
          label: "Chiều rộng"
        },

        height: {
          type: "text",
          label: "Chiều cao"
        },

        borderRadius: {
          type: "text",
          label: "Bo góc"
        },

        align: {
          type: "select",
          label: "Căn lề",
          options: [
            { label: "Trái", value: "left" },
            { label: "Giữa", value: "center" },
            { label: "Phải", value: "right" }
          ]
        }
      },

      defaultProps: {
        src: "https://picsum.photos/900/500",
        alt: "Image",
        width: "100%",
        height: "auto",
        borderRadius: "8px",
        align: "center"
      },

      render: (props) => <AdminImage {...props} />
    },

    Section: {
      label: "Section",

      fields: {
        container: {
          type: "select",
          label: "Container",
          options: [
            { label: "640px", value: "sm" },
            { label: "768px", value: "md" },
            { label: "1024px", value: "lg" },
            { label: "1280px", value: "xl" }
          ]
        },

        paddingX: {
          type: "number",
          label: "Padding X"
        },

        paddingY: {
          type: "number",
          label: "Padding Y"
        },

        backgroundColor: {
          type: "text",
          label: "Màu nền"
        }
      },

      defaultProps: {
        container: "lg",
        paddingX: 4,
        paddingY: 4,
        backgroundColor: "#ffffff"
      },

      render: (props) => <AdminSection {...props} />
    },

    Hero: {
      label: "Hero Banner",

      fields: {
        title: {
          type: "text",
          label: "Tiêu đề"
        },

        subtitle: {
          type: "textarea",
          label: "Mô tả"
        },

        buttons: {
          type: "array",
          label: "Danh sách nút",

          items: {
            type: "object",
            properties: {
              text: { type: "text", label: "Text" },
              url: { type: "text", label: "URL" },
              style: {
                type: "select",
                label: "Kiểu nút",
                options: [
                  { label: "Primary", value: "primary" },
                  { label: "Secondary", value: "secondary" },
                  { label: "Outline", value: "outline" }
                ]
              }
            }
          },

          getItemSummary: (item) => item.text || "Button"
        },

        background: {
          type: "object",
          label: "Background",
          properties: {
            type: {
              type: "select",
              label: "Loại",
              options: [
                { label: "Color", value: "color" },
                { label: "Gradient", value: "gradient" },
                { label: "Image", value: "image" }
              ]
            },

            color: { type: "text", label: "Màu nền" },
            gradientFrom: { type: "text", label: "Gradient From" },
            gradientTo: { type: "text", label: "Gradient To" },
            gradientDirection: { type: "text", label: "Direction" },
            imageUrl: { type: "text", label: "Image URL" }
          }
        },

        layout: {
          type: "object",
          label: "Layout",
          properties: {
            align: {
              type: "select",
              label: "Căn lề",
              options: [
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" }
              ]
            }
          }
        }
      },

      defaultProps: {
        title: "Chào mừng",
        subtitle: "Đây là Hero Banner",
        buttons: [
          { text: "Bắt đầu", url: "#", style: "primary" }
        ],
        background: {
          type: "gradient",
          gradientFrom: "#667eea",
          gradientTo: "#764ba2",
          gradientDirection: "to right"
        },
        layout: {
          align: "center"
        }
      },

      render: (props) => <AdminHero {...props} />
    }
  },

  categoryGroups: [
    { title: "Cơ bản", components: ["Heading", "Text", "Image"] },
    { title: "Layout", components: ["Section"] },
    { title: "Nâng cao", components: ["Hero"] }
  ],

  root: {
    render: ({ children }) => (
      <div className="min-h-screen">{children}</div>
    )
  }
};

export default puckConfig;