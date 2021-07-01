<template>
  <div class="contents">
    <v-form>
      <v-container>
        <v-row>
          <v-col class="col-8">
            <v-text-field v-model="inputModel.url" label="URLを入力" required />
          </v-col>
          <v-col class="col-4">
            <v-text-field
              v-model="inputModel.condition"
              label="部分一致検索"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-btn color="primary " @click="get"> ダウンロード </v-btn>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-list disabled>
                <v-subheader>ダウンロードリスト</v-subheader>
                <v-list-item
                  v-for="(downloadFile, i) in downloadFileList"
                  :key="i"
                >
                  <v-list-item-content
                    v-text="downloadFile.name"
                  ></v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import httpClient from '../scripts/httpClient';

export default {
  data: () => ({
    inputModel: {
      url: '',
      condition: '',
    },
    downloadFileList: [
      {
        name: 'なんちゃら.pdf',
      },
      {
        name: 'なんちゃら.xlsx',
      },
    ],
  }),
  methods: {
    get() {
      httpClient.get(
        this.inputModel.url,
        (res) => {
          console.log('success');
          console.log(res);
        },
        (res) => {
          console.log('fail');
          console.log(res);
        },
      );
    },
  },
};
</script>
