export class ProfileMenu {
  constructor(page) {
    this.page = page;
    this.menuButton = page.locator('#profileMenuButton');
    this.dropdown = page.locator('#profileMenuDropdown');
    this.viewProfileLink = page.locator('a', { hasText: 'View Profile' });
    this.editProfileLink = page.locator('a', { hasText: 'Edit Profile' });
    this.photosLink = page.locator('a', { hasText: 'Photos' });
    this.outsideArea = page.locator('#siteFooter');
  }

  async open() {
    await this.menuButton.click();
  }

  async close() {
    await this.outsideArea.click();
  }
}
