---
project: AncestorTree
path: docs/01-planning/BRD.md
type: planning
version: 1.0.0
updated: 2026-02-24
owner: "@pm"
status: approved
---

# Business Requirements Document (BRD)

## 1. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-02-24 | @pm | Initial draft |

---

## 2. Business Objectives

### 2.1 Primary Objectives

| ID | Objective | Priority | Success Criteria |
|----|-----------|----------|------------------|
| **BO-01** | Số hóa toàn bộ gia phả Chi tộc Đặng Đình | P0 | 100% dữ liệu được nhập |
| **BO-02** | Cung cấp công cụ tra cứu cho thành viên | P0 | >50% thành viên sử dụng |
| **BO-03** | Open source cho cộng đồng Việt Nam | P1 | MIT license, docs đầy đủ |

### 2.2 Business Drivers

| Driver | Description | Impact |
|--------|-------------|--------|
| **Bảo tồn văn hóa** | Lưu giữ thông tin qua thế hệ | Critical |
| **Kết nối dòng họ** | Tăng cường liên lạc trong tộc | High |
| **Hiện đại hóa** | Thu hút thế hệ trẻ | Medium |
| **Cộng đồng** | Chia sẻ cho các dòng họ khác | Medium |

---

## 3. Functional Requirements

> **Note:** Requirements derived from [Market Research](../00-foundation/market-research.md) analyzing 5 commercial platforms + 6 OSS solutions.

### 3.1 Epic: Quản lý Thành viên (People Management)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-101** | Thêm/sửa/xóa thông tin thành viên | P0 | CRUD hoạt động với validation |
| **FR-102** | Thông tin cơ bản: tên, giới tính, năm sinh/mất | P0 | Fields required/optional đúng |
| **FR-103** | Thông tin mở rộng: tiểu sử, ảnh, ghi chú | P1 | Support upload ảnh |
| **FR-104** | Thông tin liên lạc: SĐT, email, Zalo, Facebook | P1 | Links clickable |
| **FR-105** | Đời thứ mấy (generation) | P0 | Auto-calculate từ parent |
| **FR-106** | Chi/nhánh | P0 | Assignable by admin |
| **FR-107** | Trạng thái: còn sống/đã mất | P0 | Affects display (muted style) |

### 3.2 Epic: Quan hệ Gia đình (Family Relationships)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-201** | Liên kết cha-mẹ-con | P0 | Bidirectional relationship |
| **FR-202** | Liên kết vợ-chồng | P0 | Support multiple marriages |
| **FR-203** | Chính tộc (patrilineal) flag | P0 | Highlight in tree view |
| **FR-204** | Thứ tự con trong gia đình | P1 | Sortable, affects display order |

### 3.3 Epic: Cây Gia Phả (Family Tree)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-301** | Hiển thị cây gia phả toàn cảnh | P0 | Render all generations |
| **FR-302** | Zoom in/out, pan | P0 | Smooth interaction |
| **FR-303** | Thu gọn/mở rộng nhánh | P0 | Click to toggle |
| **FR-304** | Xem dòng tổ tiên (ancestors) | P1 | Filter from selected person |
| **FR-305** | Xem hậu duệ (descendants) | P1 | Filter from selected person |
| **FR-306** | Hiển thị số người khi thu gọn | P1 | "📦 X người" badge |
| **FR-307** | Đường kết nối orthogonal | P0 | Không có đường chéo |

### 3.4 Epic: Tìm kiếm & Lọc (Search & Filter)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-401** | Tìm theo tên | P0 | Instant search, highlight |
| **FR-402** | Lọc theo đời | P1 | Dropdown filter |
| **FR-403** | Lọc theo chi | P1 | Dropdown filter |
| **FR-404** | Lọc theo trạng thái (sống/mất) | P2 | Toggle filter |

### 3.5 Epic: Xác thực & Phân quyền (Auth & Authorization)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-501** | Đăng ký tài khoản | P0 | Email + password |
| **FR-502** | Đăng nhập/Đăng xuất | P0 | Session management |
| **FR-503** | Quên mật khẩu | P1 | Email reset link |
| **FR-504** | Role: Admin | P0 | Full CRUD access |
| **FR-505** | Role: Viewer | P0 | Read-only access |
| **FR-506** | Admin Panel | P0 | Manage users, roles |

### 3.6 Epic: Đóng góp & Kiểm duyệt (Contributions)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-601** | Viewer gửi đề xuất chỉnh sửa | P1 | Create contribution |
| **FR-602** | Admin review đề xuất | P1 | Approve/Reject workflow |
| **FR-603** | Notification cho admin | P2 | Email or in-app |
| **FR-604** | Lịch sử đóng góp | P2 | Audit trail |

### 3.7 Epic: Sách Gia Phả (Genealogy Book)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-701** | Generate nội dung sách từ dữ liệu | P1 | Formatted output |
| **FR-702** | Theo thế hệ, chi tiết từng nhánh | P1 | Structured content |
| **FR-703** | Export PDF (v2.0) | P2 | Printable format |

### 3.8 Epic: Danh bạ (Directory)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-801** | Danh sách thành viên với liên lạc | P1 | Table view |
| **FR-802** | Filter theo đời | P1 | Dropdown |
| **FR-803** | Search theo tên | P1 | Instant search |

### 3.9 Epic: Vietnamese Cultural Features (v1.2+)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-901** | Âm lịch (Lunar calendar) support | P1 | Convert solar ↔ lunar dates |
| **FR-902** | Ngày giỗ (Memorial day) tracking | P1 | Store & display lunar death dates |
| **FR-903** | Lịch cúng lễ (Memorial calendar) | P1 | Calendar view of giỗ dates |
| **FR-904** | Memorial reminders | P2 | Notification before giỗ |
| **FR-905** | Can Chi (Zodiac year) display | P2 | Auto-calculate from birth year |
| **FR-906** | Tên húy / Tên tự support | P2 | Additional name fields |

### 3.10 Epic: Data Exchange (GEDCOM)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| **FR-1001** | GEDCOM 5.5.1 export | P1 | Valid GEDCOM file output |
| **FR-1002** | GEDCOM 5.5.1 import | P2 | Parse and load GEDCOM file |
| **FR-1003** | GEDCOM 7.0 support | P3 | Future standard compliance |

---

## 4. Non-Functional Requirements

### 4.1 Performance

| ID | Requirement | Target | Measurement |
|----|-------------|--------|-------------|
| **NFR-01** | Page load time | <3 seconds | Lighthouse |
| **NFR-02** | Tree render (500 nodes) | <2 seconds | Manual test |
| **NFR-03** | Search response | <500ms | Manual test |

### 4.2 Scalability

| ID | Requirement | Target | Notes |
|----|-------------|--------|-------|
| **NFR-04** | Support members | 5,000+ | Per family |
| **NFR-05** | Concurrent users | 100+ | Peak |
| **NFR-06** | Database size | 500MB | Supabase free tier |

### 4.3 Security

| ID | Requirement | Target | Implementation |
|----|-------------|--------|----------------|
| **NFR-07** | Authentication | Supabase Auth | Email/password |
| **NFR-08** | Authorization | Row-Level Security | PostgreSQL RLS |
| **NFR-09** | Data encryption | HTTPS | Vercel default |
| **NFR-10** | Privacy settings | Per-person | Hide contact info |

### 4.4 Usability

| ID | Requirement | Target | Notes |
|----|-------------|--------|-------|
| **NFR-11** | Mobile responsive | 100% | All screens |
| **NFR-12** | Lighthouse Accessibility | >90 | WCAG compliance |
| **NFR-13** | Language | Vietnamese | 100% UI |
| **NFR-14** | Elderly-friendly | Yes | Large fonts option |

### 4.5 Availability

| ID | Requirement | Target | Provider |
|----|-------------|--------|----------|
| **NFR-15** | Uptime | >99% | Vercel SLA |
| **NFR-16** | Backup | Daily | Supabase |
| **NFR-17** | Recovery | <4 hours | Manual restore |

---

## 5. Data Requirements

### 5.1 Data Entities

```
┌─────────────────────────────────────────────────────────────┐
│                         people                               │
├─────────────────────────────────────────────────────────────┤
│ • handle (PK) - unique identifier                           │
│ • display_name - full name                                   │
│ • gender - 1: Male, 2: Female                               │
│ • generation - đời thứ mấy                                  │
│ • chi - chi/nhánh                                           │
│ • birth_year, death_year                                    │
│ • is_living, is_patrilineal                                 │
│ • phone, email, zalo, facebook                              │
│ • biography, notes                                          │
│ • families[] - FK to families (as parent)                   │
│ • parent_families[] - FK to families (as child)             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        families                              │
├─────────────────────────────────────────────────────────────┤
│ • handle (PK)                                               │
│ • father_handle - FK to people                              │
│ • mother_handle - FK to people                              │
│ • children[] - array of people handles                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        profiles                              │
├─────────────────────────────────────────────────────────────┤
│ • id (PK)                                                   │
│ • user_id - FK to Supabase auth.users                       │
│ • role - 'admin' | 'viewer'                                 │
│ • linked_person_handle - FK to people (optional)            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     contributions                            │
├─────────────────────────────────────────────────────────────┤
│ • id (PK)                                                   │
│ • author_id - FK to profiles                                │
│ • target_handle - FK to people                              │
│ • changes - JSON diff                                       │
│ • status - 'pending' | 'approved' | 'rejected'              │
│ • reviewed_by, reviewed_at                                  │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Data Migration

| Source | Records (Est.) | Priority |
|--------|----------------|----------|
| **Excel gia phả hiện có** | 200-500 | P0 |
| **Ảnh thành viên** | 50-100 | P1 |
| **Tiểu sử** | 20-30 | P2 |

---

## 6. Integration Requirements

### 6.1 External Systems

| System | Integration | Priority |
|--------|-------------|----------|
| **Supabase** | Auth, Database | P0 |
| **Vercel** | Hosting | P0 |
| **GEDCOM** | Import/Export (v2.0) | P2 |

### 6.2 APIs

| API | Purpose | Priority |
|-----|---------|----------|
| **Supabase REST** | CRUD operations | P0 |
| **Supabase Auth** | User management | P0 |

---

## 7. Constraints & Assumptions

### 7.1 Constraints

| ID | Constraint | Impact |
|----|------------|--------|
| **C-01** | Zero budget | Must use free tiers |
| **C-02** | Web-only (v1.0) | No native app |
| **C-03** | Vietnamese only | No i18n |
| **C-04** | 4-6 week timeline | Scope limit |

### 7.2 Assumptions

| ID | Assumption | Risk if False |
|----|------------|---------------|
| **A-01** | HĐGT provides data | Project blocked |
| **A-02** | Free tier sufficient | Need upgrade |
| **A-03** | Users have smartphone | Low adoption |
| **A-04** | Internet available | Offline not supported |

---

## 8. Acceptance Criteria (MVP)

### 8.1 MVP Definition

| Feature | Included | Notes |
|---------|----------|-------|
| ✅ People CRUD | Yes | Core |
| ✅ Family relationships | Yes | Core |
| ✅ Tree view (basic) | Yes | Core |
| ✅ Search | Yes | Core |
| ✅ Auth (Admin/Viewer) | Yes | Core |
| ⏳ Contributions | No | Post-MVP |
| ⏳ Book generator | No | Post-MVP |
| ⏳ Directory | No | Post-MVP |

### 8.2 MVP Acceptance

- [ ] 100 people records can be managed
- [ ] Tree renders correctly for 5 generations
- [ ] Admin can CRUD all data
- [ ] Viewer can browse and search
- [ ] Mobile responsive works
- [ ] Deploy to production (Vercel)

---

## 9. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Sponsor | Chủ tịch HĐGT | | ⏳ Pending |
| PM | @pm | 2026-02-24 | ✅ Approved |
| Tech Lead | @dev | | ⏳ Pending |

---

**Previous:** [00-foundation/business-case.md](../00-foundation/business-case.md)
**Next:** [roadmap.md](./roadmap.md)

*SDLC Framework 6.1.1 - Stage 01 Planning*
