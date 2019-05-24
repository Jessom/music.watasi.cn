<template>
  <div id="wrapper">
    <banner :banners='banners' />

    <div
      class="block-wrap"
      v-lazy-container="{
        selector: 'img',
        error: 'http://music.watasi.cn/loading/square.png',
        loading: 'http://music.watasi.cn/loading/square.png'
      }">
      <item-bar title='推荐歌单' />
      <el-row :gutter="20" type="flex" style="flex-wrap: wrap;">
        <el-col :span="50" class="tibt">
          <div class="img-box">
            <img
              data-src="https://pic.52112.com/180710/JPG-180710_173/UZuAHiafUi_small.jpg"
              data-loading="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFAAQMAAAD3XjfpAAAABlBMVEXc3NyCgoIIribJAAAEu0lEQVRo3u3aXapVIRQHcE3KIMgZZMPoKXtsGA2hAUQaDaRm0p5JQg895ksgJP5bS/uE7XEFBVFnXc7d58Dv/tX94VG46lrXuta1rnV7B+79fLy7hOHno19C/zMMaQeff/m4hEEK/a/CZ1LYfjv81L7AzZWx6KJEA0AE7R4iTbhr2uHQkZsum1FHJIes9Mt8GWogBVSK3MJXCWjUyQ1U3Ru87ASPDSzeNhUFUHmf+bZ2e0jKE6Tf7fIzQ+26AdEvJzaCBwEHXEwMdUL1BaYlLDxkhtVfTIwHwczw2MA0YFA3BgpLCDWafshP7KVEzdDkAZsAcpqul5o2E47nv1xKtAzthE8uJdo+E5vazI/+7Rx1/WFyu3UKX/0MOdGlExj8gPpb4up6xxHxHfrV9NzuDWjKD4k4gbrNTn2DflyDk5r3VrJF2a+Jpp/BMm8Zgu5rom1n8AnDqExmMqGvy4kUP8CkQlnNj7orffBfTIhjBblTiYdxn8+URVrBUMebcR1d8V0toEYZbxAJWqAtvhUI5gkxYVl+ac5OOYJzZl3C2Sk7IM9AS/hUjcLowh21hN/q8Tws4bWuda1/tGKXOZ6hZIEAJM6AKstalrUdGXYBxKi0dWbCLOmirJN+wraFYcIuHMt+NPorPPaDlg3bfoVlf3Zk58d/hW1/dmTnJ/4yhOR8v92fcc3kGEM6tue7TZ+3kEXcQTvb5LbLFvLR7aAbXUQyu2voGWQUDbQdLCbHpgQwuxyxhQFIgWCK6FsYCR5hAyOgQDAHYAO7YVj8FjYZBJplWN3mPgMRISwDtg3UBP2AFjg2MAhhJgh0GYwiGCWJBjgijgmzCJo9hDQR4kQ5fPEr0P7WRC1NNJDDJoFdDK0I5tgEUDOshKoT3LiEJLCEzHOfAPqDod/COqa0LIKRYLgM50QLQmE7pXSKJRQ3kI2VwC/dg+LXBnJ1KWx6B8OE1VCqBBa7g37Cg2CTwORksCu/g27Awn2tgjVcVpG0BGrsoJlNG9YS6LZQD1jDfu2Kb5Xkqz05lK9I5Wtc+apZvg7fr+zFewXx7kO+n5HvkOR7LvkuTr4v3N8W8r2rfDcsa1u+YxdV7Eld61rX+nOVhc5UIbRNCrsQui5O/N19NFKoqvofSqcf3s+DeXQG7cG3lsnqgVJfFgChnkGXH5mqXFHPleF1eyaPU/iuus4wKgckU8gjncH33WFCDxy2qsV+yn2Ah7JFQQUSBCm4nEHgDdJIDCUUhjWsoD/sgIevBH1x9RT6PiBUTJYTQ7Zn0HbfXXZZPadMU2yhYHOa2Ogn20wsJp0J0qGcJVbX7JfEpMbwk7p/llhdtYUSu4rHhIunqTAciSFfgq58SwyVoe6rRFu+JPp2Cbo8ICc6pEuJBE2xnGiRL0JXbB2JBpVhWw2GEwdU6ARNu9B0nTDgUiJDSmXocMgSNfKE99ejnoONZTZdVk3XL9DPN7oum7bVdMpxE5q2Hky1nXLshLYumzbNwbAYd49bwmIQoMGwKhxhPRgNEDx8IRg/Ii8gtwfwi2EAjlNoRkyPKQL0gWeWdA4zJfoWEguCFl2dwUMngjdfBxLgaU+jnkFNL5PnvwPEKW6oa13rWte61rX+svoMSwttJN5PuQ4AAAAASUVORK5CYII="
              data-error="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFAAQMAAAD3XjfpAAAABlBMVEXc3NyCgoIIribJAAAEu0lEQVRo3u3aXapVIRQHcE3KIMgZZMPoKXtsGA2hAUQaDaRm0p5JQg895ksgJP5bS/uE7XEFBVFnXc7d58Dv/tX94VG46lrXuta1rnV7B+79fLy7hOHno19C/zMMaQeff/m4hEEK/a/CZ1LYfjv81L7AzZWx6KJEA0AE7R4iTbhr2uHQkZsum1FHJIes9Mt8GWogBVSK3MJXCWjUyQ1U3Ru87ASPDSzeNhUFUHmf+bZ2e0jKE6Tf7fIzQ+26AdEvJzaCBwEHXEwMdUL1BaYlLDxkhtVfTIwHwczw2MA0YFA3BgpLCDWafshP7KVEzdDkAZsAcpqul5o2E47nv1xKtAzthE8uJdo+E5vazI/+7Rx1/WFyu3UKX/0MOdGlExj8gPpb4up6xxHxHfrV9NzuDWjKD4k4gbrNTn2DflyDk5r3VrJF2a+Jpp/BMm8Zgu5rom1n8AnDqExmMqGvy4kUP8CkQlnNj7orffBfTIhjBblTiYdxn8+URVrBUMebcR1d8V0toEYZbxAJWqAtvhUI5gkxYVl+ac5OOYJzZl3C2Sk7IM9AS/hUjcLowh21hN/q8Tws4bWuda1/tGKXOZ6hZIEAJM6AKstalrUdGXYBxKi0dWbCLOmirJN+wraFYcIuHMt+NPorPPaDlg3bfoVlf3Zk58d/hW1/dmTnJ/4yhOR8v92fcc3kGEM6tue7TZ+3kEXcQTvb5LbLFvLR7aAbXUQyu2voGWQUDbQdLCbHpgQwuxyxhQFIgWCK6FsYCR5hAyOgQDAHYAO7YVj8FjYZBJplWN3mPgMRISwDtg3UBP2AFjg2MAhhJgh0GYwiGCWJBjgijgmzCJo9hDQR4kQ5fPEr0P7WRC1NNJDDJoFdDK0I5tgEUDOshKoT3LiEJLCEzHOfAPqDod/COqa0LIKRYLgM50QLQmE7pXSKJRQ3kI2VwC/dg+LXBnJ1KWx6B8OE1VCqBBa7g37Cg2CTwORksCu/g27Awn2tgjVcVpG0BGrsoJlNG9YS6LZQD1jDfu2Kb5Xkqz05lK9I5Wtc+apZvg7fr+zFewXx7kO+n5HvkOR7LvkuTr4v3N8W8r2rfDcsa1u+YxdV7Eld61rX+nOVhc5UIbRNCrsQui5O/N19NFKoqvofSqcf3s+DeXQG7cG3lsnqgVJfFgChnkGXH5mqXFHPleF1eyaPU/iuus4wKgckU8gjncH33WFCDxy2qsV+yn2Ah7JFQQUSBCm4nEHgDdJIDCUUhjWsoD/sgIevBH1x9RT6PiBUTJYTQ7Zn0HbfXXZZPadMU2yhYHOa2Ogn20wsJp0J0qGcJVbX7JfEpMbwk7p/llhdtYUSu4rHhIunqTAciSFfgq58SwyVoe6rRFu+JPp2Cbo8ICc6pEuJBE2xnGiRL0JXbB2JBpVhWw2GEwdU6ARNu9B0nTDgUiJDSmXocMgSNfKE99ejnoONZTZdVk3XL9DPN7oum7bVdMpxE5q2Hky1nXLshLYumzbNwbAYd49bwmIQoMGwKhxhPRgNEDx8IRg/Ii8gtwfwi2EAjlNoRkyPKQL0gWeWdA4zJfoWEguCFl2dwUMngjdfBxLgaU+jnkFNL5PnvwPEKW6oa13rWte61rX+svoMSwttJN5PuQ4AAAAASUVORK5CYII=">
            <i class="iconfont icon-rili"></i>
            <time class="time">{{ time }}</time>
          </div>
          <p class="txt">每日歌曲推荐</p>
        </el-col>

        <el-col
          :span="50"
          class="tibt"
          v-for='item in songs'
          :key='item.id'>
          <div class="img-box">
            <img
              :data-src="item.picUrl"
              data-loading="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFAAQMAAAD3XjfpAAAABlBMVEXc3NyCgoIIribJAAAEu0lEQVRo3u3aXapVIRQHcE3KIMgZZMPoKXtsGA2hAUQaDaRm0p5JQg895ksgJP5bS/uE7XEFBVFnXc7d58Dv/tX94VG46lrXuta1rnV7B+79fLy7hOHno19C/zMMaQeff/m4hEEK/a/CZ1LYfjv81L7AzZWx6KJEA0AE7R4iTbhr2uHQkZsum1FHJIes9Mt8GWogBVSK3MJXCWjUyQ1U3Ru87ASPDSzeNhUFUHmf+bZ2e0jKE6Tf7fIzQ+26AdEvJzaCBwEHXEwMdUL1BaYlLDxkhtVfTIwHwczw2MA0YFA3BgpLCDWafshP7KVEzdDkAZsAcpqul5o2E47nv1xKtAzthE8uJdo+E5vazI/+7Rx1/WFyu3UKX/0MOdGlExj8gPpb4up6xxHxHfrV9NzuDWjKD4k4gbrNTn2DflyDk5r3VrJF2a+Jpp/BMm8Zgu5rom1n8AnDqExmMqGvy4kUP8CkQlnNj7orffBfTIhjBblTiYdxn8+URVrBUMebcR1d8V0toEYZbxAJWqAtvhUI5gkxYVl+ac5OOYJzZl3C2Sk7IM9AS/hUjcLowh21hN/q8Tws4bWuda1/tGKXOZ6hZIEAJM6AKstalrUdGXYBxKi0dWbCLOmirJN+wraFYcIuHMt+NPorPPaDlg3bfoVlf3Zk58d/hW1/dmTnJ/4yhOR8v92fcc3kGEM6tue7TZ+3kEXcQTvb5LbLFvLR7aAbXUQyu2voGWQUDbQdLCbHpgQwuxyxhQFIgWCK6FsYCR5hAyOgQDAHYAO7YVj8FjYZBJplWN3mPgMRISwDtg3UBP2AFjg2MAhhJgh0GYwiGCWJBjgijgmzCJo9hDQR4kQ5fPEr0P7WRC1NNJDDJoFdDK0I5tgEUDOshKoT3LiEJLCEzHOfAPqDod/COqa0LIKRYLgM50QLQmE7pXSKJRQ3kI2VwC/dg+LXBnJ1KWx6B8OE1VCqBBa7g37Cg2CTwORksCu/g27Awn2tgjVcVpG0BGrsoJlNG9YS6LZQD1jDfu2Kb5Xkqz05lK9I5Wtc+apZvg7fr+zFewXx7kO+n5HvkOR7LvkuTr4v3N8W8r2rfDcsa1u+YxdV7Eld61rX+nOVhc5UIbRNCrsQui5O/N19NFKoqvofSqcf3s+DeXQG7cG3lsnqgVJfFgChnkGXH5mqXFHPleF1eyaPU/iuus4wKgckU8gjncH33WFCDxy2qsV+yn2Ah7JFQQUSBCm4nEHgDdJIDCUUhjWsoD/sgIevBH1x9RT6PiBUTJYTQ7Zn0HbfXXZZPadMU2yhYHOa2Ogn20wsJp0J0qGcJVbX7JfEpMbwk7p/llhdtYUSu4rHhIunqTAciSFfgq58SwyVoe6rRFu+JPp2Cbo8ICc6pEuJBE2xnGiRL0JXbB2JBpVhWw2GEwdU6ARNu9B0nTDgUiJDSmXocMgSNfKE99ejnoONZTZdVk3XL9DPN7oum7bVdMpxE5q2Hky1nXLshLYumzbNwbAYd49bwmIQoMGwKhxhPRgNEDx8IRg/Ii8gtwfwi2EAjlNoRkyPKQL0gWeWdA4zJfoWEguCFl2dwUMngjdfBxLgaU+jnkFNL5PnvwPEKW6oa13rWte61rX+svoMSwttJN5PuQ4AAAAASUVORK5CYII="
              data-error="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFAAQMAAAD3XjfpAAAABlBMVEXc3NyCgoIIribJAAAEu0lEQVRo3u3aXapVIRQHcE3KIMgZZMPoKXtsGA2hAUQaDaRm0p5JQg895ksgJP5bS/uE7XEFBVFnXc7d58Dv/tX94VG46lrXuta1rnV7B+79fLy7hOHno19C/zMMaQeff/m4hEEK/a/CZ1LYfjv81L7AzZWx6KJEA0AE7R4iTbhr2uHQkZsum1FHJIes9Mt8GWogBVSK3MJXCWjUyQ1U3Ru87ASPDSzeNhUFUHmf+bZ2e0jKE6Tf7fIzQ+26AdEvJzaCBwEHXEwMdUL1BaYlLDxkhtVfTIwHwczw2MA0YFA3BgpLCDWafshP7KVEzdDkAZsAcpqul5o2E47nv1xKtAzthE8uJdo+E5vazI/+7Rx1/WFyu3UKX/0MOdGlExj8gPpb4up6xxHxHfrV9NzuDWjKD4k4gbrNTn2DflyDk5r3VrJF2a+Jpp/BMm8Zgu5rom1n8AnDqExmMqGvy4kUP8CkQlnNj7orffBfTIhjBblTiYdxn8+URVrBUMebcR1d8V0toEYZbxAJWqAtvhUI5gkxYVl+ac5OOYJzZl3C2Sk7IM9AS/hUjcLowh21hN/q8Tws4bWuda1/tGKXOZ6hZIEAJM6AKstalrUdGXYBxKi0dWbCLOmirJN+wraFYcIuHMt+NPorPPaDlg3bfoVlf3Zk58d/hW1/dmTnJ/4yhOR8v92fcc3kGEM6tue7TZ+3kEXcQTvb5LbLFvLR7aAbXUQyu2voGWQUDbQdLCbHpgQwuxyxhQFIgWCK6FsYCR5hAyOgQDAHYAO7YVj8FjYZBJplWN3mPgMRISwDtg3UBP2AFjg2MAhhJgh0GYwiGCWJBjgijgmzCJo9hDQR4kQ5fPEr0P7WRC1NNJDDJoFdDK0I5tgEUDOshKoT3LiEJLCEzHOfAPqDod/COqa0LIKRYLgM50QLQmE7pXSKJRQ3kI2VwC/dg+LXBnJ1KWx6B8OE1VCqBBa7g37Cg2CTwORksCu/g27Awn2tgjVcVpG0BGrsoJlNG9YS6LZQD1jDfu2Kb5Xkqz05lK9I5Wtc+apZvg7fr+zFewXx7kO+n5HvkOR7LvkuTr4v3N8W8r2rfDcsa1u+YxdV7Eld61rX+nOVhc5UIbRNCrsQui5O/N19NFKoqvofSqcf3s+DeXQG7cG3lsnqgVJfFgChnkGXH5mqXFHPleF1eyaPU/iuus4wKgckU8gjncH33WFCDxy2qsV+yn2Ah7JFQQUSBCm4nEHgDdJIDCUUhjWsoD/sgIevBH1x9RT6PiBUTJYTQ7Zn0HbfXXZZPadMU2yhYHOa2Ogn20wsJp0J0qGcJVbX7JfEpMbwk7p/llhdtYUSu4rHhIunqTAciSFfgq58SwyVoe6rRFu+JPp2Cbo8ICc6pEuJBE2xnGiRL0JXbB2JBpVhWw2GEwdU6ARNu9B0nTDgUiJDSmXocMgSNfKE99ejnoONZTZdVk3XL9DPN7oum7bVdMpxE5q2Hky1nXLshLYumzbNwbAYd49bwmIQoMGwKhxhPRgNEDx8IRg/Ii8gtwfwi2EAjlNoRkyPKQL0gWeWdA4zJfoWEguCFl2dwUMngjdfBxLgaU+jnkFNL5PnvwPEKW6oa13rWte61rX+svoMSwttJN5PuQ4AAAAASUVORK5CYII="
              :alt="item.name">
            <div class="look-wrap">
              <i class="iconfont icon-bofang1"></i>
              <span class="look">{{ item.playCount }}</span>
            </div>
          </div>
          <p class="txt">{{ item.name }}</p>
        </el-col>
      </el-row>
    </div>


    <div class="block-wrap">
      <item-bar title='独家放送' />
      <el-row :gutter="20">
        <el-col
          :span="6"
          class="tibt"
          v-for='item in exclusive'
          :key='item.id'>
          <div class="img-box">
            <img :src="item.picUrl" :alt="item.name">
          </div>
          <p class="txt">{{ item.name }}</p>
        </el-col>
      </el-row>
    </div>

    <!-- <div class="block-wrap">
      <item-bar title='最新音乐' />
      <blend-cell :list='list3' :showIndex='true' />
    </div> -->

    <div
      class="block-wrap"
      v-lazy-container="{
        selector: 'img',
        error: 'http://music.watasi.cn/loading/video.png',
        loading: 'http://music.watasi.cn/loading/video.png'
      }">
      <item-bar title='推荐MV' />
      <el-row :gutter="20" type="flex" style="flex-wrap: wrap;">
        <el-col
          :span="6"
          class="tibt elli1"
          v-for='item in mvs'
          :key='item.id'>
          <div class="img-box">
            <img
              :data-src="item.picUrl"
              data-loading='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAACzAQMAAADCL1fqAAAABlBMVEXc3NyBgYG4zJrpAAABsklEQVRYw+3XsZHDIBAFUGkICCmBEq4ElYaussOdqARCAo5/rDk79P+eccgPHL1Bu2uNht1WVlZWVlY+EzTNBaBIEEBXnMdIFmAEtGcng427HfeIJQJZKVEr8piwar0ATeyFd+Me8ORNa22HB7z4dLT5HA9Y+XS0+eBt2JV5//CJuznrw37pvOv0mUITFIYh/sd5ETjbjQQaqKN1K6EwWPYbLsf+Q6vNZ9SdwQScMaNLMGVgAxqBfUM2TSDQd4M5oRPYvMHroLBKcAdKMFgiwGB8C1YCnVV3hwE4X8OcdHgDmnaiBqGc6IET+J4wS9BT+P0mDB890X0eijV29cTu7UQRVgU2GQYJZlQBOoNloBKFF3cgBV4pH8AlwHgaPCgs929fliCs0tdwn9/6gRL9pLRx7ECgEFvg8Fle34HOoKWpsDoG04TFA02BV2DwmPAcsCpwixps28FgnCVarUW4w+XNtAIdhR4w400rMFLoYCmJ3qR2PCPf9mQo30j1O65+a9bv4frNXt8V+MS7vs/oG5LWdpG3OH0v1Lrp8u6qb8P6fs3zZU+Wgt9tZWVlZWXlI/kDucBnF9ld0rAAAAAASUVORK5CYII='
              data-error='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAACzAQMAAADCL1fqAAAABlBMVEXc3NyBgYG4zJrpAAABsklEQVRYw+3XsZHDIBAFUGkICCmBEq4ElYaussOdqARCAo5/rDk79P+eccgPHL1Bu2uNht1WVlZWVlY+EzTNBaBIEEBXnMdIFmAEtGcng427HfeIJQJZKVEr8piwar0ATeyFd+Me8ORNa22HB7z4dLT5HA9Y+XS0+eBt2JV5//CJuznrw37pvOv0mUITFIYh/sd5ETjbjQQaqKN1K6EwWPYbLsf+Q6vNZ9SdwQScMaNLMGVgAxqBfUM2TSDQd4M5oRPYvMHroLBKcAdKMFgiwGB8C1YCnVV3hwE4X8OcdHgDmnaiBqGc6IET+J4wS9BT+P0mDB890X0eijV29cTu7UQRVgU2GQYJZlQBOoNloBKFF3cgBV4pH8AlwHgaPCgs929fliCs0tdwn9/6gRL9pLRx7ECgEFvg8Fle34HOoKWpsDoG04TFA02BV2DwmPAcsCpwixps28FgnCVarUW4w+XNtAIdhR4w400rMFLoYCmJ3qR2PCPf9mQo30j1O65+a9bv4frNXt8V+MS7vs/oG5LWdpG3OH0v1Lrp8u6qb8P6fs3zZU+Wgt9tZWVlZWXlI/kDucBnF9ld0rAAAAAASUVORK5CYII='
              :alt="item.name">
            <div class="look-wrap">
              <i class="iconfont icon-bofang1"></i>
              <span class="look">{{ item.playCount }}</span>
            </div>
          </div>
          <p class="txt">{{ item.name }}</p>
          <p class="desc">
            <span
              v-for='(it, ind) in item.artists'
              :key='it.id'>{{ it.name }}<span v-if='ind+1 != item.artists.length'> / </span></span>
          </p>
        </el-col>
      </el-row>
    </div>

    <!-- <div class="block-wrap">
      <item-bar title='主播电台' />
      <blend-cell :list='list5' :bigImg='true' />
    </div> -->
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'recommend-find',
  computed: {
    ...mapState({
      // 轮播图
      banners: state => state.Recommend.banner,
      // 独家放送
      exclusive: state => state.Recommend.exclusive,
      // 推荐mv
      mvs: state => state.Recommend.mvs
    }),
    ...mapGetters({
      songs: 'GET_SONGS'
    })
  },

  data () {
    const time = new Date().getDate()
    return {
      time: time
    }
  },

  created () {
    console.log('打开纠纷卡萨丁')
    this.$store.dispatch('GET_BANNER')
    this.$store.dispatch('GET_SONGS')
    this.$store.dispatch('GET_EXCLUSIVE')
    this.$store.dispatch('GET_MV')
  },

  components: {
    Banner
  }
}
</script>
