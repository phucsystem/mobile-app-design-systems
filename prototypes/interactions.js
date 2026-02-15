/* ==========================================================================
   Design System Showcase - CJX Animations & Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Prototype Vertical Navigation Sidebar --- */
  (function buildProtoNav() {
    var pathParts = window.location.pathname.split('/');
    var currentFile = pathParts.pop() || '';
    var parentDir = pathParts.pop() || '';
    var isV1a = parentDir === 'v1a';
    var basePrefix = isV1a ? '../' : '';
    var v1aPrefix = isV1a ? '' : 'v1a/';

    var v1Screens = [
      { group: 'Showcase', items: [
        { file: 's01-showcase-home.html', label: 'Home' },
        { file: 's02-component-detail.html', label: 'Component' },
        { file: 's03-token-viewer.html', label: 'Tokens' },
      ]},
      { group: 'Templates', items: [
        { file: 's04-onboarding.html', label: 'Onboarding' },
        { file: 's05-feed.html', label: 'Feed' },
        { file: 's06-detail.html', label: 'Detail' },
        { file: 's07-search.html', label: 'Search' },
        { file: 's08-profile.html', label: 'Profile' },
      ]},
      { group: 'Extended', items: [
        { file: 's09-settings.html', label: 'Settings' },
        { file: 's10-camera.html', label: 'Camera' },
        { file: 's11-document-edit.html', label: 'Doc Edit' },
        { file: 's12-login.html', label: 'Login' },
        { file: 's13-register.html', label: 'Register' },
        { file: 's14-image-gallery.html', label: 'Gallery' },
      ]},
    ];

    var v1aScreens = [
      { group: 'v1.a Screens', items: [
        { file: 's01-showcase-home.html', label: 'Home' },
        { file: 's05-feed.html', label: 'Feed' },
        { file: 's06-detail.html', label: 'Detail' },
        { file: 's12-login.html', label: 'Login' },
        { file: 's14-image-gallery.html', label: 'Gallery' },
      ]},
    ];

    var nav = document.createElement('nav');
    nav.className = 'proto-nav';

    var versionLabel = document.createElement('div');
    versionLabel.className = 'proto-nav-version';
    versionLabel.textContent = isV1a ? 'v1.a Warm Editorial' : 'v1 Material Blue';
    nav.appendChild(versionLabel);

    var activeScreens = isV1a ? v1aScreens : v1Screens;
    activeScreens.forEach(function (section) {
      var groupLabel = document.createElement('span');
      groupLabel.className = 'proto-nav-label';
      groupLabel.textContent = section.group;
      nav.appendChild(groupLabel);

      section.items.forEach(function (screen) {
        var link = document.createElement('a');
        link.href = (isV1a ? '' : '') + screen.file;
        link.textContent = screen.label;
        if (currentFile === screen.file) {
          link.className = 'active';
        }
        nav.appendChild(link);
      });
    });

    var switchLink = document.createElement('a');
    switchLink.className = 'proto-nav-switch';
    if (isV1a) {
      switchLink.href = '../s01-showcase-home.html';
      switchLink.textContent = 'Switch to v1';
    } else {
      switchLink.href = 'v1a/s01-showcase-home.html';
      switchLink.textContent = 'Switch to v1.a';
    }
    nav.appendChild(switchLink);

    document.body.insertBefore(nav, document.body.firstChild);
  })();

  /* --- CJX Stage Entrance Animations --- */
  const cjxStage = document.body.className;

  const entranceElements = document.querySelectorAll('[data-cjx-entrance]');
  entranceElements.forEach(function (element, elementIndex) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(12px)';
    const delay = elementIndex * getStaggerForStage(cjxStage);

    setTimeout(function () {
      element.style.transition = getTransitionForStage(cjxStage);
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay);
  });

  function getTransitionForStage(stage) {
    if (stage.includes('cjx-onboarding')) {
      return 'opacity 0.6s ease-out, transform 0.6s ease-out';
    }
    if (stage.includes('cjx-usage')) {
      return 'opacity 0.3s ease, transform 0.3s ease';
    }
    if (stage.includes('cjx-retention')) {
      return 'opacity 0.4s ease, transform 0.4s ease';
    }
    if (stage.includes('cjx-discovery')) {
      return 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }
    return 'opacity 0.4s ease, transform 0.4s ease';
  }

  function getStaggerForStage(stage) {
    if (stage.includes('cjx-onboarding')) return 100;
    if (stage.includes('cjx-usage')) return 60;
    if (stage.includes('cjx-retention')) return 80;
    if (stage.includes('cjx-discovery')) return 120;
    return 80;
  }

  /* --- Filter Chip Toggle --- */
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      filterChips.forEach(function (otherChip) {
        otherChip.classList.remove('active');
      });
      chip.classList.add('active');
    });
  });

  /* --- Tab Segment Toggle --- */
  const tabSegments = document.querySelectorAll('.tab-segment');
  tabSegments.forEach(function (segment) {
    segment.addEventListener('click', function () {
      const parentGroup = segment.closest('.tab-segments');
      if (parentGroup) {
        parentGroup.querySelectorAll('.tab-segment').forEach(function (otherSeg) {
          otherSeg.classList.remove('active');
        });
      }
      segment.classList.add('active');

      const targetId = segment.getAttribute('data-tab-target');
      if (targetId) {
        const tabContainer = segment.closest('.main-content') || document;
        tabContainer.querySelectorAll('.tab-panel').forEach(function (panel) {
          panel.style.display = 'none';
        });
        const targetPanel = tabContainer.querySelector('#' + targetId);
        if (targetPanel) {
          targetPanel.style.display = 'block';
        }
      }
    });
  });

  /* --- Toggle Switch --- */
  const toggleSwitches = document.querySelectorAll('.toggle-switch');
  toggleSwitches.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
    });
  });

  /* --- Theme Option Toggle --- */
  const themeOptions = document.querySelectorAll('.theme-option');
  themeOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      const parentGroup = option.closest('.theme-selector');
      if (parentGroup) {
        parentGroup.querySelectorAll('.theme-option').forEach(function (otherOpt) {
          otherOpt.classList.remove('active');
        });
      }
      option.classList.add('active');
    });
  });

  /* --- Onboarding Page Navigation --- */
  const onboardingPages = document.querySelectorAll('.onboarding-page');
  const pageDots = document.querySelectorAll('.page-dot');
  const nextBtn = document.querySelector('[data-onboarding-next]');
  const skipBtn = document.querySelector('[data-onboarding-skip]');
  let currentPageIndex = 0;

  function showOnboardingPage(pageIndex) {
    onboardingPages.forEach(function (page, loopIndex) {
      page.style.display = loopIndex === pageIndex ? 'flex' : 'none';
    });
    pageDots.forEach(function (dot, loopIndex) {
      dot.classList.toggle('active', loopIndex === pageIndex);
    });
    if (nextBtn) {
      nextBtn.textContent = pageIndex === onboardingPages.length - 1 ? 'Get Started' : 'Next';
    }
    currentPageIndex = pageIndex;
  }

  if (nextBtn && onboardingPages.length > 0) {
    showOnboardingPage(0);
    nextBtn.addEventListener('click', function () {
      if (currentPageIndex < onboardingPages.length - 1) {
        showOnboardingPage(currentPageIndex + 1);
      } else {
        window.location.href = 's05-feed.html';
      }
    });
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', function () {
      window.location.href = 's05-feed.html';
    });
  }

  /* --- Tab Bar Navigation --- */
  const tabBarItems = document.querySelectorAll('.tab-bar-item');
  tabBarItems.forEach(function (tabItem) {
    tabItem.addEventListener('click', function (event) {
      const href = tabItem.getAttribute('href');
      if (href) {
        event.preventDefault();
        window.location.href = href;
      }
    });
  });

  /* --- Search Toggle --- */
  const searchToggle = document.querySelector('[data-search-toggle]');
  const searchBar = document.querySelector('.search-bar');
  if (searchToggle && searchBar) {
    searchBar.style.display = 'none';
    searchToggle.addEventListener('click', function () {
      const isVisible = searchBar.style.display !== 'none';
      searchBar.style.display = isVisible ? 'none' : 'block';
      if (!isVisible) {
        const searchInput = searchBar.querySelector('input');
        if (searchInput) {
          searchInput.focus();
        }
      }
    });
  }

  /* --- Parallax on Detail Hero --- */
  const heroImage = document.querySelector('.detail-hero');
  const scrollContainer = document.querySelector('.scroll-content');
  if (heroImage && scrollContainer) {
    scrollContainer.addEventListener('scroll', function () {
      const scrollTop = scrollContainer.scrollTop;
      const parallaxOffset = scrollTop * 0.4;
      heroImage.style.transform = 'translateY(' + parallaxOffset + 'px)';
      heroImage.style.opacity = Math.max(0, 1 - scrollTop / 300);
    });
  }

  /* --- Toast Show Helper --- */
  window.showToast = function (message) {
    const toast = document.querySelector('.toast');
    if (toast) {
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(function () {
        toast.classList.remove('show');
      }, 2500);
    }
  };

  /* --- Action Bar Button Active Toggle --- */
  const actionBarBtns = document.querySelectorAll('.action-bar-btn[data-toggle]');
  actionBarBtns.forEach(function (actionBtn) {
    actionBtn.addEventListener('click', function () {
      actionBtn.classList.toggle('active');
    });
  });

  /* --- Variant Selector for Component Detail --- */
  const variantChips = document.querySelectorAll('[data-variant-chip]');
  variantChips.forEach(function (variantChip) {
    variantChip.addEventListener('click', function () {
      const group = variantChip.getAttribute('data-variant-group');
      const groupChips = document.querySelectorAll('[data-variant-group="' + group + '"]');
      groupChips.forEach(function (otherChip) {
        otherChip.classList.remove('active');
      });
      variantChip.classList.add('active');
    });
  });

});
